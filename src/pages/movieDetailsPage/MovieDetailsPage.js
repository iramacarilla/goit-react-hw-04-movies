import React, { Component,Suspense } from 'react'
import {Switch, Route, NavLink } from 'react-router-dom'
import fetchApi from '../../api/fetchApi'
import moviesDetails from '../../routers/moviesDetails'
import MoviesNavigetionsDetails from '../../components/moviesDetailsNavigation/MoviesNavigetionsDetails'
import moviesDetailsRoutes from "../../routers/moviesDetails";
import Loading from '../../components/loader/Loading'



export default class MovieDetailsPage extends Component {
    state = {
        movie: null,
        id: '',
        loading: false,
        error: '',
        from: ''
    }
    componentDidMount() {
        this.setState({ loading: true });

        fetchApi.fetchMovieInfo(this.props.match.params.movieId)//then(console.log)
        .then(movie=>this.setState({movie: movie}))
        
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));

        this.setState( {id: this.props.match.params.movieId})
        this. setState({from: this.props.location.state.from })
      
    }
   
    handelGoBack = () => {
        if (this.props.location.state && this.props.location.state.from)
        {
            this.props.history.push(this.state.from)
            /*this.props.history.push(this.props.location.state.from)*/
           
        }
        //else {this.props.history.push('/movies')}
    }
    
    render() {
        const { loading } = this.state; 
        return (
            <>
              {loading && <Loading />} 
            <button type='button' onClick={this.handelGoBack}> GO BACK</button>
            { this.state.movie ? (<> 
            <div className='detailsPage'>
                <div className='detailsPageLeft'>
           <img className='detailsPageImage'
              src={ `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`}
              alt={this.state.movie.title}
            /></div>
            <div className='detailsPageRight'>
            <h2>{this.state.movie.title}</h2> 
            <p>{this.state.movie.releaseYear}</p> 
            <p>User score: {this.state.movie.vote_average} </p>
            <p>Overwiew</p>
            <p>{this.state.movie.overview}</p>
            <p>Genres</p>
            <ul className='genres'>
              {this.state.movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul></div>
                </div>
                </>) : <p>No info</p>}

           <ul class='linkList' >
      {moviesDetailsRoutes.map(({ path, exact, name }) => (
        <li  key={path}>
          <NavLink
            to={
                {pathname:`${this.props.match.url}${path}`,
                state: {
                    from: this.state.from,
                    id: this.state.id,
                }
            }} 
            className='link'
            activeClassName= 'activeLink'
            exact={exact}
           >
            {name}
          </NavLink>
        </li>))}
    </ul>
          
           <Suspense fallback={<Loading/>}>
        <Switch>
          {moviesDetailsRoutes.map(({ path, exact, component}) => 
            <Route
              path={`${this.props.match.url}${path}`}
              exact={exact}
              key={path}
              component={component}
            />
          )}
        </Switch>
      </Suspense>
    </>
            
        )
    }
}

/*<img src= {this.state.movie.poster_path} alt={this.state.movie.title}></img>
src={
    movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`

       <MoviesNavigetionsDetails match={this.props.match} id={this.state.id}/>*/