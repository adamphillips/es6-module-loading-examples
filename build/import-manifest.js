'use strict';

var _libCurrency = require('./lib/Currency');

try {
  console.log(new _libCurrency.CurrencyFormatter(_libCurrency.pound_symbol).format((0, _libCurrency.convert)(2)));
} catch (err) {
  console.log(err.message);
}