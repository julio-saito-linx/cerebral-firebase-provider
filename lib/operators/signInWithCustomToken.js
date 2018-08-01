'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function signInWithCustomTokenFactory(token) {
  function signInWithCustomToken(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.signInWithCustomToken(resolve.value(token)), path);
  }

  return signInWithCustomToken;
}

exports.default = signInWithCustomTokenFactory;
//# sourceMappingURL=signInWithCustomToken.js.map