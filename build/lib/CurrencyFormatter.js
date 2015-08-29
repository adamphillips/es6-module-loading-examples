'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var pound_symbol = '£';
exports.pound_symbol = pound_symbol;
var dollar_symbol = '$';

exports.dollar_symbol = dollar_symbol;

var _default = (function () {
  function _default() {
    var currency_symbol = arguments.length <= 0 || arguments[0] === undefined ? pound_symbol : arguments[0];

    _classCallCheck(this, _default);

    this.currency_symbol = currency_symbol;
  }

  _createClass(_default, [{
    key: 'format',
    value: function format(value) {
      return this.currency_symbol + value;
    }
  }]);

  return _default;
})();

exports['default'] = _default;