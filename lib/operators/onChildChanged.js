"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function onChildChangedFactory(path, signal) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  function onChildChanged(_ref) {
    var firebase = _ref.firebase,
        resolve = _ref.resolve;

    firebase.onChildChanged(resolve.value(path), resolve.path(signal), resolve.value(options));
  }

  return onChildChanged;
}

exports.default = onChildChangedFactory;
//# sourceMappingURL=onChildChanged.js.map