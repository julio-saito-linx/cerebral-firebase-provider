"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function onValueFactory(path, signal) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  function onValue(_ref) {
    var firebase = _ref.firebase,
        resolve = _ref.resolve;

    firebase.onValue(resolve.value(path), resolve.path(signal), resolve.value(options));
  }

  return onValue;
}

exports.default = onValueFactory;
//# sourceMappingURL=onValue.js.map