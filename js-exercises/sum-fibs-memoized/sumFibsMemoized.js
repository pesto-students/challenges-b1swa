function sumFibs(num) {
  if (num <= 1) {
    return 1;
  }
  const fibArr = [1, 1];
  while (true) {
    const sum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    if (sum > num) {
      break;
    }
    fibArr.push(sum);
  }
  return fibArr.filter((fibNum) => fibNum % 2 !== 0).reduce((acc, currValue) => acc + currValue, 0);
}

function cacheFunction(func) {
  const cache = {};
  return function (num) {
    if (num in cache) {
      return cache[num];
    }
    const result = func(num);
    cache[num] = result;
    return cache[num];
  };
}

export { sumFibs, cacheFunction };
