export const pound_symbol = '£';
export const dollar_symbol = '$';

export default class {
  constructor(currency_symbol = pound_symbol) {
    this.currency_symbol = currency_symbol;
  }

  format(value) {
    return this.currency_symbol + value;
  }
}
