// 1. Inheritance
var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black',
    showInfo: function() {
        console.log(`${this.firstName} ${this.lastName} has ${this.eyeColor} eyes and ${this.hairColor} hair.`);
    } 
}; 
var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown' 
};
daughter.__proto__ = mom;
// console.log(daughter.firstName);
// console.log(daughter.lastName);
// console.log(daughter.hairColor);
// console.log(daughter.eyeColor);
// mom.showInfo();
// daughter.showInfo();

// 2. Person, These thises, These thises 2
class Person{
    constructor (name) {
        this.name = name;
        this.friends = [];
    }
    addFriend(friend) {
        this.friends.push(friend);
    }
    createGreeting(other) {
        return 'Yo ' + other.name + '! from ' + this.name + '.'; 
    }
    greet(other) {
        console.log(this.createGreeting(other));
    }
    lazyGreeting(other) {
        setTimeout(() => {this.greet(other)}, 2000);
    }
    createGreetingsForFriends() {
        return this.friends.map(friend => this.createGreeting(friend));
    }
}

var jon = new Person('Jon');
var bob = new Person('Bob');
var bill = new Person('Bill');
var bart = new Person('Bart');
jon.addFriend(bob);
jon.addFriend(bob);
jon.addFriend(bill);
jon.addFriend(bart);

// console.log(jon.createGreetingsForFriends());
// jon.greet(bob);
// jon.lazyGreeting(bob);