'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function signInWithGithubFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  function signInWithGithub(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.signInWithGithub(resolve.value(options)), path);
  }

  return signInWithGithub;
}

exports.default = signInWithGithubFactory;
//# sourceMappingURL=signInWithGithub.js.map