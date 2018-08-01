'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setOnDisconnect = setOnDisconnect;
exports.cancelOnDisconnect = cancelOnDisconnect;

var _helpers = require('./helpers');

var _errors = require('./errors');

var ref = null;

function setOnDisconnect(path, value) {
  if (ref) {
    throw new _errors.FirebaseProviderError(new Error('You already have a setOnDisconnect'));
  }

  ref = (0, _helpers.createRef)(path);
  ref.onDisconnect().set(value);
}

function cancelOnDisconnect() {
  if (!ref) {
    throw new _errors.FirebaseProviderError(new Error('You have no setOnDisconnect'));
  }

  ref.onDisconnect().cancel();
  ref = null;
}
//# sourceMappingURL=onDisconnect.js.map