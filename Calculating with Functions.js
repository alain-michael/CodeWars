function zero(fn = (x) => x) { return fn(0); }
function one(fn = (x) => x) { return fn(1); }
function two(fn = (x) => x) { return fn(2); }
function three(fn = (x) => x) { return fn(3); }
function four(fn = (x) => x) { return fn(4); }
function five(fn = (x) => x) { return fn(5); }
function six(fn = (x) => x) { return fn(6); }
function seven(fn = (x) => x) { return fn(7); }
function eight(fn = (x) => x) { return fn(8); }
function nine(fn = (x) => x) { return fn(9); }

function plus(num) {
  return (x) => x + num;
}

function minus(num) {
  return (x) => x - num;
}

function times(num) {
  return (x) => x * num;
}

function dividedBy(num) {
  return (x) => Math.floor(x / num);
}
