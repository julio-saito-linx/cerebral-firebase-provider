'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTask;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTask(options) {
  return function (name) {
    var _this = this;

    var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return new Promise(function (resolve, reject) {
      var tasksPath = options.queuePath ? options.queuePath + '/tasks' : 'queue/tasks';
      var ref = _firebase2.default.database().ref(tasksPath);

      return _firebase2.default.auth().currentUser.getToken().then(function (_token) {
        var taskKey = ref.push(Object.assign({
          _state: options.specPrefix ? options.specPrefix + '_' + name : name,
          _token: _token
        }, options.sendTaskExecutionDetails ? {
          _execution: {
            id: _this.context.execution.id,
            functionIndex: _this.functionDetails.functionIndex
          }
        } : {}, payload));

        var taskRef = _firebase2.default.database().ref(tasksPath + '/' + taskKey.key);
        taskRef.on('value', function (data) {
          var val = data.val();

          if (!val) {
            taskRef.off();
            resolve();
          } else if (val._error_details) {
            taskRef.off();
            reject(new _errors.FirebaseProviderError(val._error_details));
          }
        });
      });
    });
  };
}
//# sourceMappingURL=createTask.js.map