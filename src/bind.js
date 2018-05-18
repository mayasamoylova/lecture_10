global.bind = function (fn, context) {
  var argArray = [].slice.call(arguments, 2);
	return function () {
	  var fnArgs = [].slice.call(arguments);
		return fn.apply(context, argArray.concat(fnArgs));
	}
};
