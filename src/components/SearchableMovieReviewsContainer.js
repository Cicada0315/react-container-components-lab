import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    state={
        reviews: [],
        searchTerm: ""
    }

    handleonChange=(e)=>{
        this.setState({ 
            searchTerm: e.target.value 
        });
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        fetch(URL.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(response => this.setState({ reviews: response.results }))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleonChange}/>
                <input type="submit" value="Search"/>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}