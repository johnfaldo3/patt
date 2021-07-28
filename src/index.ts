import { DatePart, PartToMilliseconds, regexes } from './enums';
import { ms } from './types';
import operate from './helpers/operate';
import roundDate from './helpers/roundDate';

const parse = (shorthand: string) => {
  const now = +new Date().getTime();
  const string = shorthand.replace('now', '');
  const addSubtractOperators = string.replace(regexes.rounding, '');
  const operations = addSubtractOperators.match(regexes.operations);

  const rounding: DatePart | null = string.match('/')
    ? string.match(regexes.rounding)![0].replace('/', '') as DatePart
    : null;

  let result: ms = now;

  // we might just be rounding
  if (operations.length > 0) {
    result = operate(now, operations);
  }

  return rounding
    ? roundDate(new Date(result), rounding).toISOString()
    : new Date(result).toISOString();
};

console.log(JSON.stringify(parse('now+1h-3w/d')));
