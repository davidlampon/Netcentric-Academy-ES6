// Problem 1
function identity(x) {
  return x;
};

// Problem 2
function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

// Problem 3
function identityf(x) {
  return function() {
    return x;
  };
}

// Problem 4
function addf(x) {
  return function(y) {
    return x + y;
  };
}

// Problem 5
function applyf(binary) {
  return function(x) {
    return function(y) {
      return binary(x, y);
    };
  };
}

// Problem 6
function curry(func, first) {
  return function(second) {
    return func(first, second);
  };
}

function curry(func, first) {
  return applyf(func)(first);
}

// Problem 7
inc = addf(1);
inc = applyf(add)(1);
inc = curry(add, 1);

// Problem 8
function methodize(func) {
  return function(x) {
    return func(this, x);
  };
}

// Problem 9 ???
function demethodize(func) {
  return function(that, y) {
    return func.call(that, y);
  };
}

// Problem 10
function twice(binary) {
  return function(x) {
    return binary(x, x);
  };
}

// Problem 11
function composeu(f, g) {
  return function(a) {
    return g(f(a));
  };
}

// Problem 12
function composeb(f, g) {
  return function(a, b, c) {
    return g(f(a, b), c);
  };
}

// Problem 13 ???
function once(func) {
  return function() {
    var f = func;
    func = null;
    return f.apply(this, arguments);
  };
}
// Problem 14
function counterf(value) {
  return {
    inc: function () {
      value += 1;
      return value;
    },
    dec: function() {
      value -= 1;
      return value;
    }
  };
}

// Problem 15
function revocable(nice) {
  return {
    revoke: function() {
      nice = null;
    },
    invoke: function() {
      return nice.apply(this, arguments);
    }
  };
}
