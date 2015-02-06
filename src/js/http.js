// simple XMLHttpRequest wrapper
let request = () => {

  // progress checks
  let inProgress = rq => rq.status === 200 || rq.status === 0;
  let completed  = rq => rq.readyState === 4;
  let isJSON = rq => rq.getResponseHeader('content-type').indexOf('application/json') > -1;

  var http = {
    /**
     * Builds a URI-encoded query string from an object
     * @param {Object} form Formatted `{field: value}`
     * @returns {Promise} Response body (parsed as JSON if application/json content-type detected)
     */
    encodeForm: (form = {}) => {
      return Object.keys(form).map((key) => {
        return [key, form[key]].map(encodeURIComponent).join('=');
      }).join('&');
    },

    /**
     * Simple GET request to url, returns a promise
     * @param {String} url
     * @param {Object} form Form data appended to url as form encoded query strings
     * @returns {Promise} Response body (parsed as JSON if application/json content-type detected)
     */
    get: (url, form) => {
      return new Promise((resolve, reject) => {
        var rq = new XMLHttpRequest();
        rq.onreadystatechange = () => {
          if (inProgress(rq)) {
            if (completed(rq)) {
              let response = isJSON(rq) ? JSON.parse(rq.response) : rq.response;
              resolve(response);
            }
          } else {
            reject(new Error(rq.statusText));
          }
        };
        form = http.encodeForm(form);
        rq.onerror = () => reject(new Error('XMLHttpRequest Error: ' + rq.statusText));
        rq.open('get', `${url}?${form}`, true);
        rq.send();
      });
    }
  };

  return http;
};

export default request();