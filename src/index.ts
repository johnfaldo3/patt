import { DatePart, regexes } from './enums';
import operate from './helpers/operate';
import roundDate from './helpers/roundDate';

const parse = (shorthand: string) => {
  const now = +new Date().getTime();
  const string = shorthand.replace('now', '');
  const round = string.match('/')
    ? string.match(regexes.rounding)![0].replace('/', '') as DatePart
    : null;
  const minusRound = string.replace(regexes.rounding, '');
  const operations = minusRound.match(regexes.operations);
  const result = operate(now, operations);
  const date = new Date(result);
  const parsed = round ? roundDate(date, round).toISOString() : date.toISOString();

  return {
    parsed,
  };
};

console.log(JSON.stringify(parse('now+1h/d')));
