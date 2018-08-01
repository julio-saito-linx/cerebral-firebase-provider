'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = set;

var _helpers = require('./helpers');

var _errors = require('./errors');

function set(path, payload) {
  var ref = (0, _helpers.createRef)(path);

  return ref.set(payload).then(_helpers.noop).catch(function (error) {
    throw new _errors.FirebaseProviderError(error);
  });
}
//# sourceMappingURL=set.js.map