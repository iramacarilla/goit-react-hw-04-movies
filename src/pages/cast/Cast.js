import React, { Component } from 'react'
import fetchApi from '../../api/fetchApi'
import Loading from '../../components/loader/Loading'

export default class Cast extends Component {
    state = { 
        credits: [],
        loading: false
    } 
    componentDidMount () {
        /*this.setState({ loading: true });*/
        fetchApi.fetchMovieCredits(this.props.location.state.id).
        then(credits => {
            this.setState({credits})})
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));    
      
    }

    render() {
        const { credits, loading } = this.state;
        return (
            <div className='creditContext'>
                
              <h2 >Cast</h2>
              <ul className='homeList'>
                {credits && credits.cast &&
                  credits.cast.map(member => (
                    <li className='castItem'  key={member.credit_id}>
                      {member.profile_path ? 
                        <img className='moviesImage'
                          src={`https://image.tmdb.org/t/p/w500${ member.profile_path}`}
                          alt={member.name}
                        /> : <img className='placeHolder' src='https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'/>
                      }
                      <p>{member.name}</p>
                      <p>Character: {member.character}</p>
                    </li>
                  ))}
              </ul>
              <h2>Crew</h2>
              <ul class='homeList'>
                {credits && credits.crew &&
                  credits.crew.map(member => (
                    <li className='castItem' key={member.credit_id}>
                      {member.profile_path ? 
                        <img className='moviesImage'
                          src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                          alt={member.name}
                        /> : <img className='placeHolder' src='https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'/>
                      }
                      <p>{member.name}</p>
                      <p>Job: {member.job}</p>
                    </li>
                  ))}
              </ul>
            </div>
          );
    }
}
