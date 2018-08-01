'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function pushFactory(pushPath, value) {
  function push(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.push(resolve.value(pushPath), resolve.value(value)), path);
  }

  return push;
}

exports.default = pushFactory;
//# sourceMappingURL=push.js.map