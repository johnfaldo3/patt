import { DatePart, PartToMilliseconds } from './enums';

describe('enums', () => {
  describe('DatePart', () => {
    it('should have correct number of keys', () => {
      expect(Object.keys(DatePart).length).toBe(7);
    });
    it('should correct keys', () => {
      expect(DatePart.s).toBe('s');
      expect(DatePart.m).toBe('m');
      expect(DatePart.h).toBe('h');
      expect(DatePart.d).toBe('d');
      expect(DatePart.w).toBe('w');
      expect(DatePart.M).toBe('M');
      expect(DatePart.y).toBe('y');
    });
  });
  describe('PartToMilliseconds', () => {
    it('should have correct number of keys', () => {
      expect(Object.keys(PartToMilliseconds).length).toBe(14);
    });
    it('should correct keys', () => {
      expect(PartToMilliseconds.s).toBe(1000);
      expect(PartToMilliseconds.m).toBe(60000);
      expect(PartToMilliseconds.h).toBe(3600000);
      expect(PartToMilliseconds.d).toBe(86400000);
      expect(PartToMilliseconds.w).toBe(604799999);
      expect(PartToMilliseconds.M).toBe(2629745999);
      expect(PartToMilliseconds.y).toBe(31556952000);
    });
  });
});
