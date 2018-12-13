const BASE_API_URL = 'https://yts.am/api/v2/'

class Api {

  async getMovies() {
    const response = await fetch(`${BASE_API_URL}list_movies.json`)
    const { data } = await response.json();
    return data.movies
  }

  async getSuggestion(id) {
    const response = await fetch(`${BASE_API_URL}movie_suggestions.json?movie_id=${id}`)
    const { data } = await response.json();
    return data.movies
  }

}

export default new Api()