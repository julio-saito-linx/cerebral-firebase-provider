'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transaction;

var _helpers = require('./helpers');

var _errors = require('./errors');

function transaction(path, transactionFunction) {
  var ref = (0, _helpers.createRef)(path);

  return ref.transaction(transactionFunction).then(function (result) {
    return {
      committed: result.committed,
      value: result.snapshot.val()
    };
  }).catch(function (error) {
    throw new _errors.FirebaseProviderError(error);
  });
}
//# sourceMappingURL=transaction.js.map