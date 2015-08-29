import { convert, CurrencyFormatter, pound_symbol } from './lib/Currency';

try {
  console.log(
    new CurrencyFormatter(pound_symbol)
      .format(
        convert(2)
      )
  )
}
catch(err) {
  console.log(err.message);
}
