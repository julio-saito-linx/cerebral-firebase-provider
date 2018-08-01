'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = signInWithGoogle;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _helpers = require('./helpers');

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function signInWithGoogle(options) {
  var scopes = options.scopes || [];
  var redirect = options.redirect || false;
  var provider = new _firebase2.default.auth.GoogleAuthProvider();

  scopes.forEach(function (scope) {
    provider.addScope(scope);
  });

  return new Promise(function (resolve, reject) {
    if (redirect) {
      _firebase2.default.auth().signInWithRedirect(provider);
      resolve();
    } else {
      _firebase2.default.auth().signInWithPopup(provider).then(function (result) {
        var user = (0, _helpers.createUser)(result.user);

        user.accessToken = result.credential.accessToken;
        resolve((0, _helpers.createUser)(user));
      }, function (error) {
        reject(new _errors.FirebaseProviderAuthenticationError(error));
      });
    }
  });
}
//# sourceMappingURL=signInWithGoogle.js.map