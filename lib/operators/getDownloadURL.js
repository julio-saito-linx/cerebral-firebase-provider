'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function getDownloadURLFactory(filepath, file) {
  function getDownloadURL(_ref) {
    var firebase = _ref.firebase,
        props = _ref.props,
        path = _ref.path,
        resolve = _ref.resolve;

    return (0, _helpers.createReturnPromise)(firebase.getDownloadURL(resolve.value(filepath), resolve.value(file)), path);
  }

  return getDownloadURL;
}

exports.default = getDownloadURLFactory;
//# sourceMappingURL=getDownloadURL.js.map