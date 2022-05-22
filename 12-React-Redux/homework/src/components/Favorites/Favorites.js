import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from '../../actions/index'

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies && this.props.movies.map(movie => {
          return <div>
            <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.poster} alt="movie img" />
            </Link>
            <button onClick={() => this.props.removeMovieFavorite({id:movie.id})}>X</button>
          </div>
        })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: mov => dispatch(removeMovieFavorite(mov)),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
