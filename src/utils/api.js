class Api {
  constructor(
    options = {
      headers: {
        authorization: "9a4a7412-795e-4a22-baae-2e0996dd6a25",
        "Content-Type": "application/json",
      },
    }
  ) {
    this._baseUrl = "https://around.nomoreparties.co/v1/web_es_cohort_04/";
    this._options = options;
  }

  _fetchData(specificUrl, options) {
    return fetch(this._baseUrl + specificUrl, options)
      .then((res) => {
        if (res.ok) return res.json();
        return Promise.reject(`Error: ${res.status}`);
      })
      .catch((err) => console.error(err));
  }
  
  getUserInfo() {
    const specificUrl = "users/me";
    const options = {
      method: "GET",
      headers: this._options.headers,
    };
    delete options.body;
    return this._fetchData(specificUrl, options);
  }
  
  toggleLikeBtn(id, isLiked) {
    const specificUrl = `/cards/likes/${id}`;
    const method = isLiked ? "DELETE" : "PUT";
    const options = {
      method: method,
      headers: this._options.headers,
    };
    delete options.body;
    return this._fetchData(specificUrl, options);
  }
  
  deleteCard(id) {
    const specificUrl = `/cards/${id}`;
    const options = {
      method: "DELETE",
      headers: this._options.headers,
    };
    delete options.body;
    return this._fetchData(specificUrl, options).then(() => id);
  }
  
  setNewPlace(data) {
    const specificUrl = "/cards";
    const options = {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify({
        name: data.newPlaceCaption,
        link: data.newPlace,
      }),
    };
    return this._fetchData(specificUrl, options);
  }
  
  changeUserInfo(data) {
    const specificUrl = "users/me";
    const options = {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    };
    return this._fetchData(specificUrl, options);
  }
  
  getInitialCards() {
    const specificUrl = "cards";
    const options = {
      method: "GET",
      headers: this._options.headers,
    };
    delete options.body;
    return this._fetchData(specificUrl, options);
  }
  
  setProfilePic(data) {
    const specificUrl = "users/me/avatar";
    const options = {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({ avatar: data.avatar }),
    };
    return this._fetchData(specificUrl, options);
  }
}

export default new Api();
