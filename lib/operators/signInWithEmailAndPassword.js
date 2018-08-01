'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function signInWithEmailAndPasswordFactory(email, password) {
  function signInWithEmailAndPassword(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.signInWithEmailAndPassword(resolve.value(email), resolve.value(password)), path);
  }

  return signInWithEmailAndPassword;
}

exports.default = signInWithEmailAndPasswordFactory;
//# sourceMappingURL=signInWithEmailAndPassword.js.map