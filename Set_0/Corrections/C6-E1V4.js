class Animal {
  constructor(name,animal,kingdom,speak) {
    this.name = name;
    this.animal = animal;
    this.kingdom = kingdom;
    this.speak = speak
  }
  info() {
    console.log(`${this.name}, is ${this.animal} which is a ${this.kingdom} and it ${this.speak}.`);
  }
}

class Reptile extends Animal{
  constructor(name,animal){
    let kingdom = 'Reptile';
    let speak = 'Slithers';
    super(name,animal,kingdom,speak);
  }
}

class Snake extends Reptile {
  constructor(name) {
    let animal = 'Snake';
    super(name,animal);
  }
}
 
class Mammal extends Animal{
  constructor(name,animal){
    let kingdom = 'Mammal';
    let speak = 'Comes from the uterus of a mother';
    super(name,animal,kingdom,speak);
  }
}
class Horse extends Mammal {
  constructor(name) {
    let animal = 'Horse'
    super(name,animal);
  }
}

class Dog extends Mammal{
  constructor(name){
    let animal = 'Dog'
    super(name,animal)
  }
}

class Puppy extends Dog{
  constructor(name){
    super(name);
  }
}
 
let lucky = new Snake("Lucky the Python");
let tom: Animal = new Horse("Tommy the Palomino");
let jen = new Puppy("Jen the puppy")

lucky.info(); //'Lucky the Python, is Snake which is a Reptile and it Slithers.'
tom.info();//'Tommy the Palomino, is Horse which is a Mammal and it Comes from the uterus of a mother.'
jen.info() //'Jen the puppy, is Dog which is a Mammal and it Comes from the uterus of a mother.'


