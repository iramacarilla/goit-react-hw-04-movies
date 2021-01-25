import React, { Component } from 'react';
import fetchApi from '../../api/fetchApi';


export default class Reviews extends Component {
 
  state = { 
      reviews: [],
      error: '',
      loading: true,
 };

  componentDidMount() {
    this.setState({ loading: true });
    fetchApi
      .fetchMovieReviews(this.props.location.state.id)
      .then(reviews => {this.setState({reviews})})
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
      
  }
  render() {
    const { reviews } = this.state;
    return (
        <ul className='reviewContext'>
        {reviews.length ? 
          (reviews.map(review => (
            <li  key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : 'No reviews'}
        </ul>
     
    );
  }
}
