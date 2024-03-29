"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(username, email, password) {
    _classCallCheck(this, User);

    this.username = username;
    this.email = email;
    this.password = password;
  }

  _createClass(User, [{
    key: "register",
    value: function register() {
      console.log("Congrats! ".concat(this.username, " , You are registered as user."));
    } //use of static functions

  }], [{
    key: "countusers",
    value: function countusers() {
      console.log('There are 50 users');
    }
  }]);

  return User;
}();

var manvi = new User('manvi', 'manvityagi770@gmail.com', '12345');
manvi.register(); //calling a static function

User.countusers(); //INHERITANCE

var member =
/*#__PURE__*/
function (_User) {
  _inherits(member, _User);

  function member(username, email, password, mempackage) {
    var _this;

    _classCallCheck(this, member);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(member).call(this, username, email, password));
    _this.package = mempackage;
    return _this;
  }

  _createClass(member, [{
    key: "getPackage",
    value: function getPackage() {
      console.log("".concat(this.username, " has been registered in ").concat(this.package));
    }
  }]);

  return member;
}(User);

var Suraj = new member('Suraj', 'suraj11@gnail.com', '897', 'Standard');
Suraj.register();
Suraj.getPackage();