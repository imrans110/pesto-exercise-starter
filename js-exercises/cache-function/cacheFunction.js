function cacheFunction(cb) {
  let cachedValues = {};
  return arg => {
    if (arg in cachedValues) {
      return cachedValues[arg];
    }
    let result = cb(arg);
    cachedValues[arg] = result;
    return result;
  };
}

export { cacheFunction };
