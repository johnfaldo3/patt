export enum DatePart {
  's' = 'SECOND',
  'm' = 'MINUTE',
  'h' = 'HOUR',
  'd' = 'DAY',
  'w' = 'WEEK',
  'M' = 'MONTH',
  'y' = 'YEAR',
};

export enum PartToMilliseconds {
  s = 1000,
  m = 60000,
  h = 3600000,
  d = 86400000,
  w = 604799999,
  M = 2629745999,
  y = 31556952000
}

export const regexes = {
  rounding: /\/[a-z]/,
  operations: /[+-][0-9]+[a-z]/g,
  part: /[a-z]/,
  number: /[0-9]+/,
  addition: /[+]/,
  subtraction: /[-]/,
};
