import * as cc from './lib/CurrencyConvertor';

try {
  console.log(cc.convert(2));
  console.log(cc.conversion_rate);
}
catch(err) {
  console.log(err.message);
}
