'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createOnValue;

var _helpers = require('./helpers');

function createOnValue(path, signal) {
  var _this = this;

  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var hasEmittedInitialValue = false;
  (0, _helpers.listenTo)((0, _helpers.createRef)(path, options), path, 'value', signal, function (data) {
    if (!hasEmittedInitialValue) {
      hasEmittedInitialValue = true;
      return;
    }

    _this.context.controller.getSignal(signal)(Object.assign({ value: data.val() }, options.payload || {}));
  });
}
//# sourceMappingURL=onValue.js.map