import { DatePart, PartToMilliseconds } from '../enums';

const daysInMonth = (month, year) => new Date(year, month, 0).getUTCDate();

const roundYear = (date: Date) => {
  const year: number = date.getUTCFullYear();
  const day: number = date.getUTCDate();
  const month: number = date.getUTCMonth();

  if (month >= 5) {
    return new Date(year + 1, 0, day, 0, 0, 0, 0);
  }
  return new Date(year, 0, day, 0, 0, 0, 0);
};

const roundDate = (date: Date, part: DatePart): Date => {
  const ms: number = PartToMilliseconds[part];

  switch (part) {
    case DatePart.y:
      return roundYear(date);
    case DatePart.M:
      // eslint-disable-next-line no-use-before-define
      return roundMonth(date);
    default:
      return new Date(Math.round(date.valueOf() / ms) * ms);
  }
};

const roundMonth = (date: Date): Date => {
  const year: number = date.getUTCFullYear();
  const day: number = date.getUTCDate();
  const month: number = date.getUTCMonth();
  const numberOfDays: number = daysInMonth(month, year);

  if (day >= numberOfDays / 2) {
    const newYear = month === 11;

    return roundDate(
      new Date(
        newYear ? year + 1 : year,
        newYear ? 0 : month + 1,
        1, 0, 0, 0, 0,
      ),
      DatePart.d,
    );
  }

  return roundDate(
    new Date(year, month, 1, 0, 0, 0, 0),
    DatePart.d,
  );
};

export default roundDate;
