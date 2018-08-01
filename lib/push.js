'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = push;

var _helpers = require('./helpers');

var _errors = require('./errors');

function push(path, payload) {
  var ref = (0, _helpers.createRef)(path);
  var newItem = ref.push();

  return newItem.set(payload).then(function () {
    return { key: newItem.key };
  }).catch(function (error) {
    throw new _errors.FirebaseProviderError(error);
  });
}
//# sourceMappingURL=push.js.map