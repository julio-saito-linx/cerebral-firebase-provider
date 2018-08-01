'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function getUserFactory() {
  function getUser(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path;

    return (0, _helpers.createReturnPromise)(firebase.getUser(), path);
  }

  return getUser;
}

exports.default = getUserFactory;
//# sourceMappingURL=getUser.js.map