'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = signOut;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function signOut() {
  return _firebase2.default.auth().signOut().then(function () {
    for (var key in window.localStorage) {
      if (key.indexOf('firebase:authUser') === 0) {
        window.localStorage.removeItem(key);
      }
    }
  }).catch(function (error) {
    throw new _errors.FirebaseProviderError(error);
  });
}
//# sourceMappingURL=signOut.js.map