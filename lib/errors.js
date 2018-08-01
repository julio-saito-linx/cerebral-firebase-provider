'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

var FirebaseProviderError = exports.FirebaseProviderError = function (_extendableBuiltin2) {
  _inherits(FirebaseProviderError, _extendableBuiltin2);

  function FirebaseProviderError(error) {
    _classCallCheck(this, FirebaseProviderError);

    var _this = _possibleConstructorReturn(this, (FirebaseProviderError.__proto__ || Object.getPrototypeOf(FirebaseProviderError)).call(this, error.message));

    _this.name = 'FirebaseProviderError';
    _this.message = error.message;
    return _this;
  }

  _createClass(FirebaseProviderError, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        stack: this.stack
      };
    }
  }]);

  return FirebaseProviderError;
}(_extendableBuiltin(Error));

var FirebaseProviderAuthenticationError = exports.FirebaseProviderAuthenticationError = function (_FirebaseProviderErro) {
  _inherits(FirebaseProviderAuthenticationError, _FirebaseProviderErro);

  function FirebaseProviderAuthenticationError(error) {
    _classCallCheck(this, FirebaseProviderAuthenticationError);

    var _this2 = _possibleConstructorReturn(this, (FirebaseProviderAuthenticationError.__proto__ || Object.getPrototypeOf(FirebaseProviderAuthenticationError)).call(this, error));

    _this2.name = 'FirebaseProviderAuthenticationError';
    _this2.message = error.message;
    _this2.code = error.code;
    return _this2;
  }

  _createClass(FirebaseProviderAuthenticationError, [{
    key: 'toJSON',
    value: function toJSON() {
      return {
        name: this.name,
        message: this.message,
        code: this.code,
        stack: this.stack
      };
    }
  }]);

  return FirebaseProviderAuthenticationError;
}(FirebaseProviderError);
//# sourceMappingURL=errors.js.map