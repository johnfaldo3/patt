import { DatePart, PartToMilliseconds } from "../enums";

const roundDate = (date: Date, part: DatePart): Date => {
  const ms: number = PartToMilliseconds[part];
  return new Date(Math.round(date.getTime() / ms) * ms);
};

export default roundDate;
