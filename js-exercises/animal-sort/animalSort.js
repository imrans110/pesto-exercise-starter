const animalSort = animals => {
  return animals.sort(compareAnimal);
};

function compareAnimal(animal, nextAnimal) {
  if (animal.numberOfLegs === nextAnimal.numberOfLegs) {
    const animalName = animal.name.toLowerCase();
    const nextAnimalName = nextAnimal.name.toLowerCase();
    return animalName > nextAnimalName ? 1 : -1;
  }
  return animal.numberOfLegs > nextAnimal.numberOfLegs ? 1 : -1;
}

export { animalSort };
