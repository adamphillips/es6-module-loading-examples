import { convert, conversion_rate as rate } from './lib/CurrencyConvertor';

try {
  console.log(convert(2));
  console.log(rate);
  console.log(conversion_rate);
}
catch(err) {
  console.log(err.message);
}
