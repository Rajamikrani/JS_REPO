// a. Create an empty object called dog
let dog = {};

// b. Print the dog object on the console
console.log(dog);

// c. Add properties to the dog object: name, legs, color, age, and bark method
dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function() {
    return "Woof Woof";
};

// d. Get the properties of the dog object
console.log("Name: " + dog.name);
console.log("Legs: " + dog.legs);
console.log("Color: " + dog.color);
console.log("Age: " + dog.age);
console.log("Bark: " + dog.bark());

// e. Set new properties: breed and getDogInfo method
dog.breed = "Golden Retriever";
dog.getDogInfo = function() {
    return `${this.name} is a ${this.age}-year-old ${this.breed} with ${this.legs} legs.`;
};

// Print the new properties
console.log("Breed: " + dog.breed);
console.log("Dog Info: " + dog.getDogInfo());
