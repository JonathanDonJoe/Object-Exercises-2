Object Exercises 2

Inheritance

Given the following objects:

var mom = { 
     firstName: 'Alice', 
     lastName: 'Wong', 
     eyeColor: 'brown', 
     hairColor: 'black' 
}; 

var daughter = { 
     firstName: 'Ilene', 
     hairColor: 'brown' 
};

One

Write code to make daughter inherit properties from mom. What are the daugther's properties and their values? Print them out.

Two

Add a method called showInfo to mom by attaching a function to it as a property. Calling this method will print out all four properties. Call this method on both mom and daugther.

Person

Given this Person type:

function Person(name) { 
     this.name = name; 
     this.friends = []; 
} 

Person.prototype.addFriend = function(friend) { 
     this.friends.push(friend); 
}; 

Person.prototype.createGreeting = function(other) { 
     return 'Yo ' + other.name + '! from ' + this.name + '.'; 
};

Person.prototype.greet = function(other) {
     console.log(this.createGreeting(other)); 
};

Rewrite the above type as a class.

These thises

Given the Person type given in the last problem, add to it a lazyGreet method which will print out the same greeting message but only after 2 seconds.

These thises 2

Add to Person a createGreetingsForFriends method which will return an array of strings - each string in the array is a greeting generated by the createGreeting method. For example:

> var alfie = new Person('Alfie'); 
> var anushka = new Person('Anushka'); 
> var henrique = new Person('Henrique'); 
> alfie.addFriend(anushka); > alfie.addFriend(henrique); 
> alfie.createGreetingsForFriends(); 
["Yo Anushka! from Alfie.", "Yo Henrique! from Alfie."]

Do this without using a loop but by using map instead.