'use strict';

var _libCurrencyConvertor = require('./lib/CurrencyConvertor');

try {
  console.log((0, _libCurrencyConvertor.convert)(2));
  console.log(_libCurrencyConvertor.conversion_rate);
} catch (err) {
  console.log(err.message);
}