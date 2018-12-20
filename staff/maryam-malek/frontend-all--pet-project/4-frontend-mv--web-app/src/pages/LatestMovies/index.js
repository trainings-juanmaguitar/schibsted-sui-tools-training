import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class LatestMovies extends Component {
  state = {moviesList: {movies: []}}
  async componentDidMount() {
    const {domain} = this.context
    const moviesList = await domain.get('list_latest_movies_use_case').execute()
    this.setState({moviesList})
  }
  render() {
    const {
      moviesList: {movies, totalPages, totalResults, actualPage}
    } = this.state
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>Latest Movies</h1>
        {movies.length && (
          <ul>
            {movies.map((movie, i) => (
              <li key={i}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
        <h3>{totalPages}</h3>
        <h3>{totalResults}</h3>
        <h3>{actualPage}</h3>
      </React.Fragment>
    )
  }
}

LatestMovies.contextTypes = {domain: PropTypes.object}

export default LatestMovies