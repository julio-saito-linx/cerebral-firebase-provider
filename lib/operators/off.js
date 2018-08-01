"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function offFactory(path, event) {
  function off(_ref) {
    var firebase = _ref.firebase,
        resolve = _ref.resolve;

    firebase.off(resolve.value(path), resolve.value(event));
  }

  return off;
}

exports.default = offFactory;
//# sourceMappingURL=off.js.map