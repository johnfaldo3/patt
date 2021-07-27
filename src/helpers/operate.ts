import { PartToMilliseconds, regexes } from "../enums";

const operate = (now: number, operations: string[]) => {
  let value: number = now;

  Object.values(operations).forEach((operation) => {
    const partValue = Number(
      PartToMilliseconds[
        operation.match(regexes.part)[0]
      ],
    );

    const isAddition = regexes.addition.test(operation);
    const quantity: number = Number(operation.match(regexes.number)[0]);
    const adjustment = (quantity * partValue);

    if (isAddition) {
      value += adjustment;
    } else {
      value -= adjustment;
    }
  });

  return value;
};

export default operate;
