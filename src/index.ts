import { DatePart, PartToMilliseconds, regexes } from './enums';
import { ms } from './types';
import roundDate from './helpers/roundDate';

const operate = (now: number, operations: string[]): ms => {
  let value: ms = now;

  Object.values(operations).forEach((operation) => {
    const partValue = Number(
      PartToMilliseconds[
        operation.match(regexes.part)[0]
      ],
    );

    const quantity: ms = Number(operation.match(regexes.number)[0]);
    const adjustment = quantity * partValue;
    const isAddition = regexes.addition.test(operation);

    if (isAddition) {
      value += adjustment;
    } else {
      value -= adjustment;
    }
  });

  return value;
};

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
  if (operations) {
    result = operate(now, operations);
  }

  console.log({ result, rounded: roundDate(new Date(result), rounding) });

  return rounding
    ? roundDate(new Date(result), rounding).toISOString()
    : new Date(result).toISOString();
};

// console.log(JSON.stringify(parse('now+1h-3w/d')));

export default parse;
