var Promise = require('bluebird');
var axios = require('axios');

function client (options) {
  var key = options.key;
  var secret = options.key;

  var search = {
    book: function (params) {
      params.key = key;
      return axios.get('https://www.goodreads.com/search/index.xml', {
        params: params,
        timeout: 0
      });
    }
  };

  return {
    search: search
  };
}

module.exports = {
  client: client
};
