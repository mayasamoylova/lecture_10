require('../bind');

describe('bind(fn, context)', function () {
  var context = null;
  var changedContext = null;

  beforeEach(function () {
    context = {
      name: 'Default Context',
    };

    changedContext = {
      name: 'Changed Context',
    };
  });

  it('should be defined', function () {
    expect(global.bind).toBeDefined();
    expect(typeof global.bind).toBe('function');
  });

  it('returns new function', function () {
    var initialFn = function () {
    };

    var boundFn = global.bind(initialFn);

    expect(typeof  boundFn).toBe('function');
    expect(boundFn).not.toBe(initialFn);
  });

  it('binds function call context', function () {
    var boundFn = global.bind(function () {
      return this;
    }, context);

    expect(boundFn.call(changedContext)).toBe(context);
  });

  it('binds arguments', function () {
    var initialFn = function (digit) {
      return this;
    };

    var initialArg = 10;
    var changedArg = 20;

    var test = {
      boundFn: global.bind(initialFn, context, initialArg),
    };

    jest.spyOn(test, 'boundFn');

    expect(test.boundFn.call(changedContext, changedArg)).toBe(context);
    expect(test.boundFn).toHaveBeenCalledWith(initialArg);
  });
});