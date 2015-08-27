'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libCurrencyFormatter = require('./lib/CurrencyFormatter');

var _libCurrencyFormatter2 = _interopRequireDefault(_libCurrencyFormatter);

try {
  console.log(new _libCurrencyFormatter2['default']('£').format(2));
} catch (err) {
  console.log(err.message);
}