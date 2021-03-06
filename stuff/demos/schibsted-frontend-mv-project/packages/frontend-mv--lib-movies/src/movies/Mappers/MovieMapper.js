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
      title,
      overview,
      original_language: language,
      release_date: release,
      poster_path: relativePosterPath
    } = movie

    const imageBaseUrl = this._config.get('IMAGE_BASE_URL')

    return this._movieEntity({
      id,
      title,
      overview,
      language,
      release,
      posterPath: `${imageBaseUrl}${relativePosterPath}`
    })
  }
}

export default MoviesMapper
