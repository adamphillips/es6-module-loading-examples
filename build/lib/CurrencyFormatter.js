"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CurrencyFormatter = (function () {
  function CurrencyFormatter(currency_symbol) {
    _classCallCheck(this, CurrencyFormatter);

    this.currency_symbol = currency_symbol;
  }

  _createClass(CurrencyFormatter, [{
    key: "format",
    value: function format(value) {
      return this.currency_symbol + value;
    }
  }]);

  return CurrencyFormatter;
})();

exports["default"] = CurrencyFormatter;
module.exports = exports["default"];