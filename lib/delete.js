'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteFile;

var _helpers = require('./helpers');

var _errors = require('./errors');

function deleteFile(path, filename) {
  var ref = (0, _helpers.createStorageRef)(path).child(filename);

  return ref.delete().then(_helpers.noop).catch(function (error) {
    throw new _errors.FirebaseProviderError(error);
  });
}
//# sourceMappingURL=delete.js.map