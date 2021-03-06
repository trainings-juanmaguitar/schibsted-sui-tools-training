import {Mapper} from '@s-ui/domain'

class MoviesMapper extends Mapper {
  constructor({config, movieEntity}) {
    super()
    this._config = config
    this._movieEntity = movieEntity
  }

  map = movie => {
    const {
      id,
      original_title: title,
      overview,
      original_language: language,
      release_date: releaseDate,
      poster_path: posterPath,
      genres
    } = movie

    const imageBaseUrl = this._config.get('IMAGE_BASE_URL')

    return this._movieEntity({
      id,
      title,
      overview,
      language,
      releaseDate,
      posterPath: `${imageBaseUrl}${posterPath}`,
      genres
    })
  }
}

export default MoviesMapper
