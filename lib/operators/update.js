'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function updateFactory(updates) {
  function update(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.update(resolve.value(updates)), path);
  }

  return update;
}

exports.default = updateFactory;
//# sourceMappingURL=update.js.map