'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function setFactory(setPath, value) {
  function set(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.set(resolve.value(setPath), resolve.value(value)), path);
  }

  return set;
}

exports.default = setFactory;
//# sourceMappingURL=set.js.map