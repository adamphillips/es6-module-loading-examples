import Formatter from './lib/CurrencyFormatter';

try {
  console.log(new Formatter('£').format(2));
}
catch(err) {
  console.log(err.message);
}
