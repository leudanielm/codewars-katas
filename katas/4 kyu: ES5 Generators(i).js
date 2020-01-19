// https://www.codewars.com/kata/53c29a6abb5187180d000b65

function generator(sequencer, ...rest) {
  const seq = sequencer.apply(null, rest);
  var timesRan = 0;
  return {
    next() {
      return seq(timesRan++);
    }
  };
}

function dummySeq() {
  return function() {
    return "dummy";
  };
}

function factorialSeq() {
  return function(timesRan) {
    return !timesRan ? 1 : Array.apply(null, { length: timesRan }).map((x, i) => ++i).reduce((m, c) => m *= c, 1);
  };
}

function fibonacciSeq() {
  var vals = [];
  return function(timesRan) {
    if (timesRan <= 2) {
      vals.push(1);
      return (timesRan || 1);
    } else {
      vals.push((vals[vals.length - 1] || 0) + (vals[vals.length - 2] || 1));
    }
    return vals[vals.length - 1] + vals[vals.length - 2];
  };
}

function rangeSeq(start, step) {
  return function(timesRan) {
    return !timesRan ? start : start += step;
  };
}

function primeSeq() {
  const prefetchedPrimes = [2, 3, 5, 7, 11, 13, 17, 19];
  return function(timesRan) {
    return prefetchedPrimes[timesRan];
  };
}

function partialSumSeq(...args) {
  return function(timesRan) {
    if (timesRan <= args.length - 1) {
      return args.slice(0, timesRan + 1).reduce((m, c) => m + c, 0);
    } else {
      throw Error('End of sequence');
    }
  };
}
