'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function transactionFactory(transactionPath, transactionFunction) {
  function transaction(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.transaction(resolve.value(transactionPath), transactionFunction), path);
  }

  return transaction;
}

exports.default = transactionFactory;
//# sourceMappingURL=transaction.js.map