class MainApi {
  constructor({ baseURL, headers }) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(console.log(res.status));
  }

  register(valuesObj) {
    const { email, password, username } = valuesObj;
    return fetch(`${this._baseURL}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    }).then((res) => this._handleResponse(res));
  }

  authorize(valuesObj) {
    const { email, password } = valuesObj;
    return fetch(`${this._baseURL}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => this._handleResponse(res))
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
        }
      });
  }

  checkToken(token) {
    return fetch(`${this._baseURL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => this._handleResponse(res))
      .then((res) => res);
  }

  getUserInfo() {
    return fetch(`${this._baseURL}/users/me`, {
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res))
      .then((res) => res.data);
  }

  saveArticle(keyword, title, text, date, source, link, image) {
    return fetch(`${this._baseURL}/articles`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    })
      .then((res) => this._handleResponse(res))
      .then((res) => res.data);
  }

  deleteArticle(articleId) {
    return fetch(`${this._baseURL}/articles/${articleId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res))
      .then((res) => res.data);
  }

  getSavedCards() {
    return fetch(`${this._baseURL}/articles`, {
      method: "GET",
      headers: this._headers,
    })
      .then((res) => this._handleResponse(res))
      .then((res) => res.data);
  }
}

export default new MainApi({
  baseURL: "https://simonnews.students.nomoreparties.sbs",
  headers: {
    authorization: "",
    "Content-Type": "application/json",
  },
});
