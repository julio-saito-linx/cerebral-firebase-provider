'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = value;

var _helpers = require('./helpers');

var _errors = require('./errors');

function value(path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var ref = (0, _helpers.createRef)(path, options);

  return ref.once('value').then(function (snapshot) {
    if (options.asArray && 'forEach' in snapshot) {
      return {
        key: snapshot.key,
        value: (0, _helpers.snapshotToArray)(snapshot)
      };
    }

    return {
      key: snapshot.key,
      value: snapshot.val()
    };
  }).catch(function (error) {
    throw new _errors.FirebaseProviderError(error);
  });
}
//# sourceMappingURL=value.js.map