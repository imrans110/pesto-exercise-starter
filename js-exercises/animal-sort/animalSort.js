const animalSort = animals => {
  return animals.sort(compareAnimal);
};

function compareAnimal(animal, nextAnimal) {
  if (animal.numberOfLegs === nextAnimal.numberOfLegs) {
    const animalName = animal.name.toLowerCase();
    const nextAnimalName = nextAnimal.name.toLowerCase();
    if (animalName > nextAnimalName) {
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
