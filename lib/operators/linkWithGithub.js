'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../helpers');

function linkWithGithubFactory(options) {
  function linkWithGithub(_ref) {
    var firebase = _ref.firebase,
        path = _ref.path;

    return (0, _helpers.createReturnPromise)(firebase.linkWithGithub(options), path);
  }

  return linkWithGithub;
}

exports.default = linkWithGithubFactory;
//# sourceMappingURL=linkWithGithub.js.map