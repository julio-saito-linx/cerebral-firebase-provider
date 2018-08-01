"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function onChildRemovedFactory(path, signal) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  function onChildRemoved(_ref) {
    var firebase = _ref.firebase,
        resolve = _ref.resolve;

    firebase.onChildRemoved(resolve.value(path), resolve.path(signal), resolve.value(options));
  }

  return onChildRemoved;
}

exports.default = onChildRemovedFactory;
//# sourceMappingURL=onChildRemoved.js.map