"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convert = convert;
var conversion_rate = 1.54;

exports.conversion_rate = conversion_rate;

function convert(gbp_value) {
  return gbp_value * conversion_rate;
}

;