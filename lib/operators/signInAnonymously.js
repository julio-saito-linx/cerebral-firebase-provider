'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function signInAnonymouslyFactory() {
  function signInAnonymously(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path;

    return (0, _helpers.createReturnPromise)(firebase.signInAnonymously(), path);
  }

  return signInAnonymously;
}

exports.default = signInAnonymouslyFactory;
//# sourceMappingURL=signInAnonymously.js.map