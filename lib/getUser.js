'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUser;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _helpers = require('./helpers');

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUser() {
  return new Promise(function (resolve, reject) {
    _firebase2.default.auth().getRedirectResult().then(function (result) {
      if (result.user) {
        var user = (0, _helpers.createUser)(result.user);

        if (result.credential) {
          user.accessToken = result.credential.accessToken;
        }
        resolve({
          user: _firebase2.default.auth().currentUser ? user : null,
          isRedirected: true
        });
      } else {
        var unsubscribe = _firebase2.default.auth().onAuthStateChanged(function (user) {
          unsubscribe();
          resolve({
            user: user ? (0, _helpers.createUser)(user) : null,
            isRedirected: false
          });
        });
      }
    }, function (error) {
      reject(new _errors.FirebaseProviderError(error));
    });
  });
}
//# sourceMappingURL=getUser.js.map