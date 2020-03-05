const limitFunctionCallCount = (callback, invocationLimit) => {
  let cbInvokedCount = 0;
  return (...args) => {
    if (cbInvokedCount < invocationLimit) {
      cbInvokedCount++;
      return callback(...args);
    }
    return null;
  };
};

export { limitFunctionCallCount };
