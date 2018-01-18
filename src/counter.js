var count = { c: 0 };

function increment() {
  count.c += 1;
}

exports.count = count;
exports.increment = increment;

// export var count = 0;
// export function increment() {
//   count += 1;
// }
