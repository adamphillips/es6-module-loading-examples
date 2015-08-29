import Formatter, { dollar_symbol } from './lib/CurrencyFormatter';

try {
  console.log(new Formatter().format(2));
  console.log(new Formatter(dollar_symbol).format(2));
}
catch(err) {
  console.log(err.message);
}
