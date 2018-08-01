'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = update;

var _helpers = require('./helpers');

var _errors = require('./errors');

function update(path, payload) {
  var ref = (0, _helpers.createRef)(path);

  return ref.update(Object.keys(payload).reduce(function (convertedPayload, key) {
    convertedPayload[key.replace(/\./g, '/')] = payload[key];

    return convertedPayload;
  }, {})).then(_helpers.noop).catch(function (error) {
    throw new _errors.FirebaseProviderError(error);
  });
}
//# sourceMappingURL=update.js.map