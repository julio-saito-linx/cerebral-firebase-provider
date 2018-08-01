'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function removeFactory(removePath) {
  function remove(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.remove(resolve.value(removePath)), path);
  }

  return remove;
}

exports.default = removeFactory;
//# sourceMappingURL=remove.js.map