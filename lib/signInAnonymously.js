'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = signInAnonymously;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _helpers = require('./helpers');

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function signInAnonymously() {
  return new Promise(function (resolve, reject) {
    _firebase2.default.auth().signInAnonymously().then(function () {
      var unsubscribe = _firebase2.default.auth().onAuthStateChanged(function (user) {
        unsubscribe();
        resolve((0, _helpers.createUser)(user));
      });
    }, function (error) {
      reject(new _errors.FirebaseProviderAuthenticationError(error));
    });
  });
}
//# sourceMappingURL=signInAnonymously.js.map