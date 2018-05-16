require('../bind');

describe('bind(fn, context)', function () {
  it('should be defined', function () {
    expect(global.bind).toBeDefined();
    expect(typeof global.bind).toBe('function');
  });
});