function removeFalsyValues(array) {
  return array.filter(el => Boolean(el));
}

export { removeFalsyValues };
