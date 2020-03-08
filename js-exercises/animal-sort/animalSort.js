const animalSort = animals => {
  return animals.sort(compareAnimal);
};

function compareAnimal(animal, nextAnimal) {
  if (animal.numberOfLegs === nextAnimal.numberOfLegs) {
    if (animal.name > nextAnimal.name) {
      return 1;
    }
    return -1;
  }
  if (animal.numberOfLegs > nextAnimal.numberOfLegs) {
    return 1;
  }
  return -1;
}

export { animalSort };
