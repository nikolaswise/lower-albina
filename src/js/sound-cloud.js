import http from './http.js';

var client = function (clientId) {
  let id = clientId;
   var sc = {
    request: (url, form = {}) => {
      form.client_id = id;
      return http.get(`http://api.soundcloud.com/${url}`, form);
    },
    userID: username => sc.request('resolve', { url: `http://soundcloud.com/${username}` }),
    favorites: userID => sc.request(`users/${userID}/favorites`),
    trackFavorites: trackID => sc.request(`tracks/${trackID}/favoriters`)
  }
  return sc;
};

export default client;