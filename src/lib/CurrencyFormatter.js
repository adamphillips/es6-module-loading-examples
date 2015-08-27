export default class CurrencyFormatter {
  constructor(currency_symbol) {
    this.currency_symbol = currency_symbol;
  }

  format(value) {
    return this.currency_symbol + value;
  }
}
