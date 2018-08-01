'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDownloadURL;

var _helpers = require('./helpers');

function getDownloadURL(path, file) {
  var ref = (0, _helpers.createStorageRef)(path).child(file);

  return ref.getDownloadURL();
}
//# sourceMappingURL=getDownloadURL.js.map