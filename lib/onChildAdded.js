'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onChildAdded;

var _helpers = require('./helpers');

function onChildAdded(path, signal) {
  var _this = this;

  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  (0, _helpers.listenTo)((0, _helpers.createRef)(path, options), path, 'child_added', signal, function (data) {
    _this.context.controller.getSignal(signal)(Object.assign({
      key: data.key,
      value: data.val()
    }, options.payload || {}));
  });
}
//# sourceMappingURL=onChildAdded.js.map