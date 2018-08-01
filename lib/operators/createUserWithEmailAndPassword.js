'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function createUserWithEmailAndPasswordFactory(email, password) {
  function createUserWithEmailAndPassword(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.createUserWithEmailAndPassword(resolve.value(email), resolve.value(password)), path);
  }

  return createUserWithEmailAndPassword;
}

exports.default = createUserWithEmailAndPasswordFactory;
//# sourceMappingURL=createUserWithEmailAndPassword.js.map