'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function taskFactory(taskName) {
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  function task(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.task(resolve.value(taskName), resolve.value(payload)), path);
  }

  return task;
}

exports.default = taskFactory;
//# sourceMappingURL=task.js.map