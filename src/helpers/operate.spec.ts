import operate from "./operate";

describe('operate', () => {
  it('should do something', () => {
    expect(operate(new Date().getTime(), ['+1d'])).toBeTruthy();
  });
});