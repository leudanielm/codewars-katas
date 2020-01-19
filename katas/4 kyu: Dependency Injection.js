// https://www.codewars.com/kata/5302d655be2a91068b0001fb

/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  var that = this,
      args = func.toString().match(/\(([^\)]+)\)/),
      deps = that.dependency, ar = [];
      if (args || (args && args.length >= 2)) {
        args = args[1].split(',').map(function(i){return i.trim();});
        args.forEach(function(arg) {
          if (deps[arg]) {
            ar.push(deps[arg]);
          }
        });      
      }

  return function() {
     return ar.length ? func.apply(func, ar) : func.apply(func);
  };
}
