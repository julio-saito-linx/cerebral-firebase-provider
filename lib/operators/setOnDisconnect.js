"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setOnDisconnectFactory;
function setOnDisconnectFactory(setPath, value) {
  function setOnDisconnect(_ref) {
    var firebase = _ref.firebase,
        resolve = _ref.resolve;

    firebase.setOnDisconnect(resolve.value(setPath), resolve.value(value));
  }

  return setOnDisconnect;
}
//# sourceMappingURL=setOnDisconnect.js.map