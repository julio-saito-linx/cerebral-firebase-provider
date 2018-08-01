'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function linkWithFacebookFactory(options) {
  function linkWithFacebook(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path;

    return (0, _helpers.createReturnPromise)(firebase.linkWithFacebook(options), path);
  }

  return linkWithFacebook;
}

exports.default = linkWithFacebookFactory;
//# sourceMappingURL=linkWithFacebook.js.map