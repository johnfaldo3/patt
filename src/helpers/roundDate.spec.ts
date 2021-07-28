import Mockdate from 'mockdate';
import roundDate from './roundDate';
import { DatePart } from '../enums';

describe('roundDate', () => {
  afterEach(() => {
    Mockdate.reset();
  });

  describe('seconds', () => {
    it('should round down to the nearest second', () => {
      const mockDate = '2020-05-01T00:00:01.400Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.s).toISOString()).toBe('2020-05-01T00:00:01.000Z');
    });
    it('should round up to the nearest second', () => {
      const mockDate = '2020-05-01T00:00:01.600Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.s).toISOString()).toBe('2020-05-01T00:00:02.000Z');
    });
  });

  describe('minutes', () => {
    it('should round down to the nearest minute', () => {
      const mockDate = '2020-05-01T00:01:20.000Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.m).toISOString()).toBe('2020-05-01T00:01:00.000Z');
    });
    it('should round up to the nearest minute', () => {
      const mockDate = '2020-05-01T00:01:31.000Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.m).toISOString()).toBe('2020-05-01T00:02:00.000Z');
    });
  });

  describe('hours', () => {
    it('should round down to the nearest hour', () => {
      const mockDate = '2020-05-01T01:29:00.000Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.h).toISOString()).toBe('2020-05-01T01:00:00.000Z');
    });
    it('should round up to the nearest minute', () => {
      const mockDate = '2020-05-01T01:31:00.000Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.h).toISOString()).toBe('2020-05-01T02:00:00.000Z');
    });
  });

  describe('days', () => {
    it('should round down to the nearest day', () => {
      const mockDate = '2020-05-01T04:00:00.000Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.d).toISOString()).toBe('2020-05-01T00:00:00.000Z');
    });
    it('should round up to the nearest day', () => {
      const mockDate = '2020-05-01T18:00:00.000Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.d).toISOString()).toBe('2020-05-02T00:00:00.000Z');
    });
  });

  describe('months', () => {
    it('should round down to the nearest month', () => {
      const mockDate = '2020-05-02T00:00:00.000Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.M).toISOString()).toBe('2020-05-01T00:00:00.000Z');
    });
    it('should round up to the nearest month', () => {
      const mockDate = '2020-05-20T00:00:00.000Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.M).toISOString()).toBe('2020-06-01T00:00:00.000Z');
    });
  });

  describe('years', () => {
    it('should round down to the nearest year', () => {
      const mockDate = '2020-05-01T00:00:00.000Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.y).toISOString()).toBe('2020-01-01T00:00:00.000Z');
    });
    it('should round up to the nearest year', () => {
      const mockDate = '2020-06-01T00:00:00.000Z';
      Mockdate.set(mockDate);
      expect(roundDate(new Date(mockDate), DatePart.y).toISOString()).toContain('2021-01-01T00:00:00.000Z');
    });
  });
});
