'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function putFactory(putPath, file) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  function put(_ref) {
    var firebase = _ref.firebase,
        props = _ref.props,
        state = _ref.state,
        path = _ref.path,
        resolve = _ref.resolve;

    var evaluatedOptions = Object.keys(options).reduce(function (currentEvaluatedOptions, key) {
      var option = options[key];

      if (key === 'progress') {
        if (!resolve.isTag(option, 'state', 'signal')) {
          throw new Error("@cerebral/firebase: The value for 'progress' option should be either 'state' or 'signal' tag.");
        }

        if (option.type === 'signal') {
          currentEvaluatedOptions[key] = function (progress) {
            // We call progress signal with same 'props' context
            resolve.value(option)(Object.assign({}, props, progress));
          };
        } else {
          currentEvaluatedOptions[key] = function (progress) {
            state.set(resolve.path(option), progress.progress);
          };
        }
      } else {
        currentEvaluatedOptions[key] = resolve.value(option);
      }

      return currentEvaluatedOptions;
    }, {});

    return (0, _helpers.createReturnPromise)(firebase.put(resolve.value(putPath), resolve.value(file), evaluatedOptions), path);
  }

  return put;
}

exports.default = putFactory;
//# sourceMappingURL=put.js.map