'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function deleteUserFactory(passwordTemplate) {
  function deleteUser(_ref) {
    var firebase = _ref.firebase,
        resolve = _ref.resolve,
        path = _ref.path;

    var password = resolve.value(passwordTemplate);

    return (0, _helpers.createReturnPromise)(firebase.deleteUser(password), path);
  }

  return deleteUser;
}

exports.default = deleteUserFactory;
//# sourceMappingURL=deleteUser.js.map