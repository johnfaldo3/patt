export enum DatePart {
  'd' = 'DAY',
  'm' = 'MONTH',
  'y' = 'YEAR',
  'h' = 'HOUR',
};

export enum PartToMilliseconds {
  h = 3600000,
  d = 86400000,
  y = 31536000000
}

export const regexes = {
  rounding: /\/[a-z]/,
  operations: /[+-][0-9]+[a-z]/g,
  part: /[a-z]/,
  number: /[0-9]+/,
  addition: /[+]/,
  subtraction: /[-]/,
};
