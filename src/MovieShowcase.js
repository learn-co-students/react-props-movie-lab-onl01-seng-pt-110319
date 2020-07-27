import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((item, i) => <MovieCard
      title={item.title}
      IMDBRating={item.IMDBRating}
      genres={item.genres}
      poster={item.poster}
      key={i}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
