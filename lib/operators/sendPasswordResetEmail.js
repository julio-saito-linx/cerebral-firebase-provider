'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function sendPasswordResetEmailFactory(email) {
  function sendPasswordResetEmail(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.sendPasswordResetEmail(resolve.value(email)), path);
  }

  return sendPasswordResetEmail;
}

exports.default = sendPasswordResetEmailFactory;
//# sourceMappingURL=sendPasswordResetEmail.js.map