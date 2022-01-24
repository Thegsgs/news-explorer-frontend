class NewsApi {
  constructor({ baseURL, apiKey }) {
    this._baseURL = baseURL;
    this._apiKey = apiKey;
  }

  _getLastWeeksDate() {
    const ourDate = new Date();
    const pastDate = ourDate.getDate() - 7;
    ourDate.setDate(pastDate);
    return ourDate.toISOString().slice(0, 10);
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getCards(keyword) {
    return fetch(
      `${this._baseURL}?q=${keyword}&apiKey=${
        this._apiKey
      }&pagesize=100&language=en&from=${this._getLastWeeksDate()}`,
      {
        headers: this._headers,
      }
    )
      .then((res) => this._handleResponse(res))
      .then((res) => res.articles);
  }
}

export default new NewsApi({
  baseURL: "https://nomoreparties.co/news/v2/everything",
  apiKey: "f872e02ce8b245079fbd569d00019ce6",
});
