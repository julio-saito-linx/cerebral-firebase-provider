'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = put;

var _helpers = require('./helpers');

var _errors = require('./errors');

/* options.progress expects a function which will receive
 * details on the upload: { progress, bytesTransferred, totalBytes, state }
 * progress is a %, state can be 'paused' or 'running'
 */
function put(path, file) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var filename = options.filename || file.name;
  var ref = (0, _helpers.createStorageRef)(path).child(filename);
  var metadata = Object.assign({}, options.metadata || {}, {
    contentType: file.type
  });
  var uploadTask = ref.put(file, metadata);
  var progress = options.progress || function () {};
  return new Promise(function (resolve, reject) {
    uploadTask.on('state_changed', function (snapshot) {
      progress(Object.assign({}, options.payload || {}, {
        progress: snapshot.bytesTransferred / snapshot.totalBytes,
        bytesTransferred: snapshot.bytesTransferred,
        totalBytes: snapshot.totalBytes,
        state: snapshot.state // 'paused', 'running'
      }));
    }, function (error) {
      reject(new _errors.FirebaseProviderError(error));
    }, function () {
      resolve({ url: uploadTask.snapshot.downloadURL, filename: filename });
    });
  });
}
//# sourceMappingURL=put.js.map