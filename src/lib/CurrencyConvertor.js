export const conversion_rate = 1.54

export function convert(gbp_value) {
  return gbp_value * conversion_rate;
};
