'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRef = createRef;
exports.createStorageRef = createStorageRef;
exports.listenTo = listenTo;
exports.stopListening = stopListening;
exports.createUser = createUser;
exports.createReturnPromise = createReturnPromise;
exports.noop = noop;
exports.snapshotToArray = snapshotToArray;

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refs = {};

function createRef(path) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (path.indexOf('/') >= 0) {
    throw new _errors.FirebaseProviderError(new Error('The path "' + path + '" is not valid. Use dot notation for consistency with Cerebral'));
  }
  path = path.replace(/\./g, '/');
  return Object.keys(options).reduce(function (ref, key) {
    switch (key) {
      case 'payload':
        return ref;
      case 'asArray':
        return ref;
      case 'orderByKey':
        return options[key] ? ref[key]() : ref;
      case 'orderByValue':
        return options[key] ? ref[key]() : ref;
      default:
        return ref[key](options[key]);
    }
  }, _firebase2.default.database().ref(path));
}

function createStorageRef(path) {
  if (path.indexOf('/') >= 0) {
    throw new _errors.FirebaseProviderError(new Error('The path "' + path + '" is not valid. Use dot notation for consistency with Cerebral'));
  }
  path = path.replace(/\./g, '/');
  return _firebase2.default.storage().ref(path);
}

function listenTo(ref, path, event, signal, cb) {
  refs[path] = refs[path] || {};
  refs[path][event] = refs[path][event] ? refs[path][event].concat(ref) : [ref];

  ref.on(event, cb, function (error) {
    throw new _errors.FirebaseProviderError(new Error(event + ' listener to path ' + path + ', triggering signal: ' + signal + ', gave error: ' + error.message));
  });
}

var events = {
  onChildAdded: 'child_added',
  onChildChanged: 'child_changed',
  onChildRemoved: 'child_removed',
  onValue: 'value',
  '*': '*'
};

function stopListening(passedPath, event) {
  var realEventName = events[event] || '*';
  var pathArray = passedPath.split('.');
  var path = passedPath;
  var isWildcardPath = false;

  if (event && !realEventName) {
    throw new _errors.FirebaseProviderError(new Error('The event "' + event + '" is not a valid event. Use: "' + Object.keys(events)));
  }

  if (pathArray[pathArray.length - 1] === '*') {
    isWildcardPath = true;
    pathArray.pop();
    path = pathArray.join('.');
  }

  var refsHit = void 0;
  if (isWildcardPath) {
    refsHit = Object.keys(refs).reduce(function (currentKeysHit, refPath) {
      if (refPath.indexOf(path) === 0) {
        return currentKeysHit.concat(refPath);
      }

      return currentKeysHit;
    }, []);
  } else {
    refsHit = refs[path] ? [path] : [];
  }

  if (!refsHit.length) {
    throw new _errors.FirebaseProviderError(new Error('The path "' + path + '" has no listeners'));
  }

  refsHit.forEach(function (refPath) {
    var ref = refs[refPath];
    if (realEventName === '*') {
      Object.keys(ref).forEach(function (eventName) {
        ref[eventName].forEach(function (listener) {
          return listener.off();
        });
        delete ref[eventName];
      });
    } else {
      if (!ref[realEventName]) {
        throw new _errors.FirebaseProviderError(new Error('The path"' + path + '" has no listeners for "' + realEventName + '"'));
      }
      ref[realEventName].forEach(function (listener) {
        return listener.off();
      });
      delete ref[realEventName];
    }

    if (Object.keys(ref).length === 0) {
      delete refs[refPath];
    }
  });
}

function createUser(user) {
  return {
    uid: user.uid,
    isAnonymous: user.isAnonymous,
    providerData: user.providerData,
    displayName: user.displayName,
    email: user.email,
    emailVerified: user.emailVerified,
    photoURL: user.photoURL
  };
}

function createReturnPromise(returnPromise, path) {
  var promise = returnPromise;

  if (!path) {
    promise = promise.then(function (response) {
      return response ? { response: response } : {};
    }).catch(function (error) {
      return { error: error };
    });
  }

  if (path && path.success) {
    promise = promise.then(function (response) {
      return response ? path.success({ response: response }) : path.success();
    });
  }
  if (path && path.error) {
    promise = promise.catch(function (error) {
      return path.error({ error: error });
    });
  }

  return promise;
}

function noop() {}

function snapshotToArray(snapshot) {
  var result = [];

  snapshot.forEach(function (childSnapshot) {
    result.push({
      key: childSnapshot.key,
      value: childSnapshot.val()
    });
  });

  return result;
}
//# sourceMappingURL=helpers.js.map