import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SearchBox from '../../components/searchbox/SearchBox'
import queryString from 'query-string'
import fetchApi from '../../api/fetchApi'
import Loading from '../../components/loader/Loading'

export default class MoviesPage extends Component {
    state= {
        movies:[],
        loading: false,
        error: ''
    }
   componentDidMount() {
       const {query} = queryString.parse(this.props.location.search);
     if (query) {
            this.setState({ loading: true });

            fetchApi.fetchSearchMovie(query).then(movies=>this.setState({movies}))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
    const {query: prevQuery} = queryString.parse(prevProps.location.search)
    const {query: nextQuery} = queryString.parse(this.props.location.search)   
    
    if (prevQuery !== nextQuery) {
        this.setState({ loading: true });

        fetchApi.fetchSearchMovie(nextQuery)
        .then(movies=>this.setState({movies}))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));

    }
    }
    
    handleChangeQuery = query => {
        this.props.history.push({
            ...this.props.location,
            search: `query=${query}`,
        })
    }
    render() {
        const { loading } = this.state; 
        return (
           <>
               <SearchBox onSubmit={this.handleChangeQuery}/>
               {loading && <Loading />} 
                {this.state.movies.length > 0 && (<ul  class='homeList'>
                
                {this.state.movies.map(movie=>(
                       <li key={movie.id}>
                           <Link to={
                               {pathname: `${this.props.match.url}/${movie.id}`, 
                                state: {from: this.props.location}}}>
                                <div>
                               <img className='homeImage'
                               src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}/>
                               <h2>{movie.name}  {movie.title} </h2>
                               </div>
                               </Link>
                       </li> ))}
          </ul>)}
        </>
        )
    }
}
