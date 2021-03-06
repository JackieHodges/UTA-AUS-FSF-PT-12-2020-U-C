// TODO: Import the parent class
const Vehicle = require('./vehicle');

// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor (id, color, passengers){
    this.id = id;
    this.color = color;
    this.numberOfWheels = 4;
    this.sound = "beep";
    this.passengers = passengers;

    super(id, this.numberOfWheels, this.sound);
  }

  useHorn(){
    console.log(this.sound);
  }

  checkPassengers(){
    
  }
}
const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
