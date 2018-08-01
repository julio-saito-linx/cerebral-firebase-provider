'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function linkWithGoogleFactory(options) {
  function linkWithGoogle(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path;

    return (0, _helpers.createReturnPromise)(firebase.linkWithGoogle(options), path);
  }

  return linkWithGoogle;
}

exports.default = linkWithGoogleFactory;
//# sourceMappingURL=linkWithGoogle.js.map