function dropElements(elements, predicate) {
  const filteredElements = elements.filter(predicate);
  return filteredElements;
}

export { dropElements };
