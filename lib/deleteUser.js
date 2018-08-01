'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteUser;

var _helpers = require('./helpers');

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deleteUser(password) {
  var user = _firebase2.default.auth().currentUser;

  return user.delete().then(_helpers.noop).catch(function (error) {
    throw new _errors.FirebaseProviderError(error);
  });
}
//# sourceMappingURL=deleteUser.js.map