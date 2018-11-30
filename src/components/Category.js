import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import MoviePoster from './MoviePoster';

class Category extends Component {
  render() {
    const { name, movies } = this.props.category;
    return (
      <div className="Category">
        <Header as="h2">{name}</Header>
        <div className="Category__wrapper">
          {movies.map((movie) => <MoviePoster key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default Category;
