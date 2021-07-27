import { PartToMilliseconds, regexes } from "../enums";
import { ms } from "../types";

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

export default operate;
