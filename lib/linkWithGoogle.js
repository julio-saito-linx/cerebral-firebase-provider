'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = linkWithGoogle;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _helpers = require('./helpers');

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linkWithGoogle() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var scopes = options.scopes || [];
  var redirect = options.redirect || false;
  var provider = new _firebase2.default.auth.GoogleAuthProvider();

  scopes.forEach(function (scope) {
    provider.addScope(scope);
  });

  return new Promise(function (resolve, reject) {
    if (redirect) {
      _firebase2.default.auth().currentUser.linkWithRedirect(provider);
      resolve();
    } else {
      _firebase2.default.auth().currentUser.linkWithPopup(provider).then(function (result) {
        var user = (0, _helpers.createUser)(result.user);

        user.accessToken = result.credential.accessToken;
        resolve({
          user: user
        });
      }, function (error) {
        reject(new _errors.FirebaseProviderAuthenticationError(error));
      });
    }
  });
}
//# sourceMappingURL=linkWithGoogle.js.map