'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FirebaseProviderAuthenticationError = exports.FirebaseProviderError = undefined;

var _errors = require('./errors');

Object.defineProperty(exports, 'FirebaseProviderError', {
  enumerable: true,
  get: function get() {
    return _errors.FirebaseProviderError;
  }
});
Object.defineProperty(exports, 'FirebaseProviderAuthenticationError', {
  enumerable: true,
  get: function get() {
    return _errors.FirebaseProviderAuthenticationError;
  }
});
exports.default = FirebaseProviderFactory;

var _cerebral = require('cerebral');

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _helpers = require('./helpers');

var _signInAnonymously = require('./signInAnonymously');

var _signInAnonymously2 = _interopRequireDefault(_signInAnonymously);

var _getUser = require('./getUser');

var _getUser2 = _interopRequireDefault(_getUser);

var _onChildAdded = require('./onChildAdded');

var _onChildAdded2 = _interopRequireDefault(_onChildAdded);

var _onChildRemoved = require('./onChildRemoved');

var _onChildRemoved2 = _interopRequireDefault(_onChildRemoved);

var _onChildChanged = require('./onChildChanged');

var _onChildChanged2 = _interopRequireDefault(_onChildChanged);

var _onValue = require('./onValue');

var _onValue2 = _interopRequireDefault(_onValue);

var _createTask = require('./createTask');

var _createTask2 = _interopRequireDefault(_createTask);

var _value = require('./value');

var _value2 = _interopRequireDefault(_value);

var _push = require('./push');

var _push2 = _interopRequireDefault(_push);

var _set = require('./set');

var _set2 = _interopRequireDefault(_set);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _put = require('./put');

var _put2 = _interopRequireDefault(_put);

var _getDownloadURL = require('./getDownloadURL');

var _getDownloadURL2 = _interopRequireDefault(_getDownloadURL);

var _delete = require('./delete');

var _delete2 = _interopRequireDefault(_delete);

var _remove = require('./remove');

var _remove2 = _interopRequireDefault(_remove);

var _transaction = require('./transaction');

var _transaction2 = _interopRequireDefault(_transaction);

var _createUserWithEmailAndPassword = require('./createUserWithEmailAndPassword');

var _createUserWithEmailAndPassword2 = _interopRequireDefault(_createUserWithEmailAndPassword);

var _signInWithEmailAndPassword = require('./signInWithEmailAndPassword');

var _signInWithEmailAndPassword2 = _interopRequireDefault(_signInWithEmailAndPassword);

var _signOut = require('./signOut');

var _signOut2 = _interopRequireDefault(_signOut);

var _signInWithFacebook = require('./signInWithFacebook');

var _signInWithFacebook2 = _interopRequireDefault(_signInWithFacebook);

var _signInWithGoogle = require('./signInWithGoogle');

var _signInWithGoogle2 = _interopRequireDefault(_signInWithGoogle);

var _signInWithGithub = require('./signInWithGithub');

var _signInWithGithub2 = _interopRequireDefault(_signInWithGithub);

var _signInWithCustomToken = require('./signInWithCustomToken');

var _signInWithCustomToken2 = _interopRequireDefault(_signInWithCustomToken);

var _deleteUser = require('./deleteUser');

var _deleteUser2 = _interopRequireDefault(_deleteUser);

var _sendPasswordResetEmail = require('./sendPasswordResetEmail');

var _sendPasswordResetEmail2 = _interopRequireDefault(_sendPasswordResetEmail);

var _linkWithFacebook = require('./linkWithFacebook');

var _linkWithFacebook2 = _interopRequireDefault(_linkWithFacebook);

var _linkWithGithub = require('./linkWithGithub');

var _linkWithGithub2 = _interopRequireDefault(_linkWithGithub);

var _linkWithGoogle = require('./linkWithGoogle');

var _linkWithGoogle2 = _interopRequireDefault(_linkWithGoogle);

var _onDisconnect = require('./onDisconnect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FirebaseProviderFactory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { payload: {} };

  _firebase2.default.initializeApp(options.config);

  return (0, _cerebral.Provider)({
    cancelOnDisconnect: _onDisconnect.cancelOnDisconnect,
    createUserWithEmailAndPassword: _createUserWithEmailAndPassword2.default,
    delete: _delete2.default,
    deleteFile: _delete2.default,
    deleteUser: _deleteUser2.default,
    getDownloadURL: _getDownloadURL2.default,
    getUser: _getUser2.default,
    linkWithFacebook: _linkWithFacebook2.default,
    linkWithGithub: _linkWithGithub2.default,
    linkWithGoogle: _linkWithGoogle2.default,
    off: _helpers.stopListening,
    onChildAdded: _onChildAdded2.default,
    onChildChanged: _onChildChanged2.default,
    onChildRemoved: _onChildRemoved2.default,
    onValue: _onValue2.default,
    push: _push2.default,
    put: _put2.default,
    remove: _remove2.default,
    sendPasswordResetEmail: _sendPasswordResetEmail2.default,
    set: _set2.default,
    setOnDisconnect: _onDisconnect.setOnDisconnect,
    signInAnonymously: _signInAnonymously2.default,
    signInWithCustomToken: _signInWithCustomToken2.default,
    signInWithEmailAndPassword: _signInWithEmailAndPassword2.default,
    signInWithFacebook: _signInWithFacebook2.default,
    signInWithGithub: _signInWithGithub2.default,
    signInWithGoogle: _signInWithGoogle2.default,
    signOut: _signOut2.default,
    task: (0, _createTask2.default)(options),
    transaction: _transaction2.default,
    update: _update2.default,
    value: _value2.default
  }, {
    cache: !options.sendTaskExecutionDetails
  });
}
//# sourceMappingURL=index.js.map