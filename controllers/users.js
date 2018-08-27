'use strict';

module.exports = function() {
  return {
    SetRouting: function(router) {
      router.get('/', this.indexRoute);
    },
    indexRoute: function(req, res) {
      res.render('index', { test: 'this is test' })
    }
  }
}
