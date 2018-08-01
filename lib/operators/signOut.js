'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function signOutFactory() {
  function signOut(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path;

    return (0, _helpers.createReturnPromise)(firebase.signOut(), path);
  }

  return signOut;
}

exports.default = signOutFactory;
//# sourceMappingURL=signOut.js.map