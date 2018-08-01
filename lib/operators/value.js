'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function valueFactory(valuePath) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function value(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.value(resolve.value(valuePath), resolve.value(options)), path);
  }

  return value;
}

exports.default = valueFactory;
//# sourceMappingURL=value.js.map