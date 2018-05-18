global.measuredExecutionTime = function (fn) {
  return function () {
    console.time('execution time');
    var result = fn.apply(this, arguments);
    console.timeEnd('execution time');
    return result;
  };
};

