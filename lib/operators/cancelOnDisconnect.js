"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cancelOnDisconnectFactory;
function cancelOnDisconnectFactory() {
  function cancelOnDisconnect(_ref) {
    var firebase = _ref.firebase,
        resolve = _ref.resolve;

    firebase.cancelOnDisconnect();
  }

  return cancelOnDisconnect;
}
//# sourceMappingURL=cancelOnDisconnect.js.map