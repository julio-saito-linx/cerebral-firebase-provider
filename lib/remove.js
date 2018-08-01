'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remove;

var _helpers = require('./helpers');

var _errors = require('./errors');

function remove(path) {
  var ref = (0, _helpers.createRef)(path);

  return ref.remove().then(_helpers.noop).catch(function (error) {
    throw new _errors.FirebaseProviderError(error);
  });
}
//# sourceMappingURL=remove.js.map