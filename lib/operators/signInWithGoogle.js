'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function signInWithGoogleFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  function signInWithGoogle(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.signInWithGoogle(resolve.value(options)), path);
  }

  return signInWithGoogle;
}

exports.default = signInWithGoogleFactory;
//# sourceMappingURL=signInWithGoogle.js.map