'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _libCurrencyConvertor = require('./lib/CurrencyConvertor');

var cc = _interopRequireWildcard(_libCurrencyConvertor);

try {
  console.log(cc.convert(2));
  console.log(cc.conversion_rate);
} catch (err) {
  console.log(err.message);
}