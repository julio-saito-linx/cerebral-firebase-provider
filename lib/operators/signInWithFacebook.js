'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function signInWithFacebookFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  function signInWithFacebook(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.signInWithFacebook(resolve.value(options)), path);
  }

  return signInWithFacebook;
}

exports.default = signInWithFacebookFactory;
//# sourceMappingURL=signInWithFacebook.js.map