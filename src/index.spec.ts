import Mockdate from 'mockdate';
import parse from './index';

describe('parse', () => {
  const mockDate: string = '2020-05-01T00:00:00.000Z';

  beforeEach(() => {
    Mockdate.set(mockDate);
  });

  it('should parse now-1y/y correctly', () => {
    expect(parse('now-1y/y')).toBe('2019-01-01T00:00:00.000Z');
  });

  it('should parse now/y correctly', () => {
    expect(parse('now/y')).toBe('2020-01-01T00:00:00.000Z');
  });
  it('should parse now-1d correctly', () => {
    expect(parse('now-1d')).toBe('2020-04-30T00:00:00.000Z');
  });
  it('should parse now+1d correctly', () => {
    expect(parse('now+1d')).toBe('2020-05-02T00:00:00.000Z');
  });
  it('should parse now-4d-4h correctly', () => {
    expect(parse('now-4d-4h')).toBe('2020-04-26T20:00:00.000Z');
  });
});
