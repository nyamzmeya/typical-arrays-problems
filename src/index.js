function sorting(a, b) {
  return a - b;
}

exports.min = function min (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
}
  array.sort(sorting);
  return array[0];
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
}
  array.sort(sorting);
  return array[array.length - 1];
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length == 0) {
    return 0;
}
  sum = 0;
  for (let i = 0; i != array.length; i++) {
    sum += array[i];
  }

  return sum/array.length;
}

