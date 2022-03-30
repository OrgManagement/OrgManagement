const defaultTest = require('./jestTest');

describe('basic test', () => {
  it('test default function', () => {
    expect(defaultTest()).toBe(true);
  });
});