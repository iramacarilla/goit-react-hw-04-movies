import React, {Component} from 'react'
import fetchApi from '../../api/fetchApi'
import {Link} from 'react-router-dom'
import Loading from '../../components/loader/Loading'

export default class HomePage extends Component {
    state = {
        movies: [],
        loading: true,
        error: ''
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetchApi.fetchMovie().then(movies=>this.setState({movies}))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
      
    }
   
    render () {
        const { loading } = this.state; 
    return (
        <ul class='homeList'>
        {loading && <Loading />} 
      {this.state.movies.length ? (this.state.movies.map(movie=>(
                       <li key={movie.id}>
                           <Link to={
                               {pathname: `/movies/${movie.id}`, 
                               state: {from: this.props.location}}}>
                                   <div>
                               <img className='homeImage'
                               src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                              alt={movie.title}/>
                               <h2> {movie.name}  {movie.title} </h2>
                               </div>
                               </Link>
                       </li>
      ))) : 'No info'}
        </ul>
    )}
}


/* {
       movies.map(movie=>(
                       <li key={movie.id}>
                           <Link to={`/${this.props.match.url}/${movie.id}`}>{movie.name}</Link>
                       </li>
        /*)}*/