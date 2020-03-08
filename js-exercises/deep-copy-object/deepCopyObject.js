const createDeepCopy = objToCopy => {
  const deepCopy, v, key;
  deepCopy = Array.isArray(objToCopy) ? [] : {};
  for (key in objToCopy) {
      value = objToCopy[key];
      deepCopy[key] = (typeof value === "object") ? createDeepCopy(value) : value;
  }
  return deepCopy;
};

const isObject = objMaybe => {
  var type = typeof objMaybe;
  return type === "function" || (type === "object" && !!objMaybe);
};

const deepCopyObject = objToCopy => {
  if (isObject(objToCopy)) {
    return createDeepCopy(objToCopy);
  }
  return objToCopy;
};

export { deepCopyObject };
