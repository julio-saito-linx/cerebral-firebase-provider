'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function deleteFactory(deletePath, file) {
  function deleteOp(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.delete(resolve.value(deletePath), resolve.value(file)), path);
  }

  return deleteOp;
}

exports.default = deleteFactory;
//# sourceMappingURL=delete.js.map