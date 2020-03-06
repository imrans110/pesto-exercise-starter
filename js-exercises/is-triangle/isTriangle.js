function isTriangle(sideA, sideB, sideC) {
  if (sideA + sideB > sideC && sideA + sideC > sideB && sideC + sideB > sideA) {
    return true;
  }
  return false;
}

export { isTriangle };
