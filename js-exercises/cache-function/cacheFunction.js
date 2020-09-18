function cacheFunction(func) {
  const cache = {};
  return (n) => {
    const id = JSON.stringify(n);
    if (!(id in cache)) {
      cache[id] = func(n);
    }

    return cache[id];
  };
}

export {
  cacheFunction,
};
