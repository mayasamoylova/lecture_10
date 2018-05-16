require('../measureExecutionTime');

describe('measureExecutionTime(fn)', function () {
  it('should be defined', function () {
    expect(global.measureExecutionTime).toBeDefined();
    expect(typeof global.measureExecutionTime).toBe('function');
  });
});