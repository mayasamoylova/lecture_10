require('../measuredExecutionTime');

describe('measureExecutionTime(fn)', function () {
  it('should be defined', function () {
    expect(global.measuredExecutionTime).toBeDefined();
    expect(typeof global.measuredExecutionTime).toBe('function');
  });
});