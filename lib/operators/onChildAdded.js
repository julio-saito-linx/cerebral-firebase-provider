"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function onChildAddedFactory(path, signal) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  function onChildAdded(_ref) {
    var firebase = _ref.firebase,
        resolve = _ref.resolve;

    firebase.onChildAdded(resolve.value(path), resolve.path(signal), resolve.value(options));
  }

  return onChildAdded;
}

exports.default = onChildAddedFactory;
//# sourceMappingURL=onChildAdded.js.map