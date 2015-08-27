import { convert, conversion_rate } from './lib/CurrencyConvertor';

try {
  console.log(convert(2));
  console.log(conversion_rate);
}
catch(err) {
  console.log(err.message);
}
