// Animal class
class Animal {
    constructor(species) {
        this._species = species;
    }
    
    // Getter for species
    get species() {
        return this._species;
    }

    // Method to log the sound of the animal
    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Dog class extending Animal
class Dog extends Animal {
    // Method to log bark sound
    bark() {
        console.log("woof");
    }
}

// Cat class extending Animal
class Cat extends Animal {
    // Method to log purr sound
    purr() {
        console.log("purr");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
