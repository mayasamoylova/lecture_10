require('../measuredExecutionTime');

describe('measureExecutionTime(fn)', function () {
  it('should be defined', function () {
    expect(global.measuredExecutionTime).toBeDefined();
    expect(typeof global.measuredExecutionTime).toBe('function');
  });

  it('does not affect function execution context', function () {
    var initialFn = function () {
      return this;
    };

    var user = {
      test: global.measuredExecutionTime(initialFn),
    };

    var changedContext = {
      name: 'Changed Context',
    };

    expect(user.test()).toBe(user);
    expect(user.test.call(changedContext)).toBe(changedContext);
  });

  it('does not affect function call arguments', function () {
    var initialData = 10;

    var initialFn = function (data) {
      return data;
    };

    var enhancedFn = global.measuredExecutionTime(initialFn);

    expect(enhancedFn(initialData)).toBe(initialData);
  });

  it('calls console.time, targetFn and console.timeEnd in a right order', function () {
    var expectedResult = ['console.time', 'target function', 'console.timeEnd'];
    var actualResult = [];

    console.time = function () {
      actualResult.push('console.time');
    };

    console.timeEnd = function () {
      actualResult.push('console.timeEnd');
    };

    global.measuredExecutionTime(function () {
      actualResult.push('target function');
    })();

    expect(actualResult).toEqual(expectedResult);
  });
});