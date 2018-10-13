var counter = function(num){
  counter.count = num !== undefined ? num : counter.count;
  return counter.count++;
};

counter.count = 0;

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(20));
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(75));
console.log(counter());
console.log(counter());
console.log(counter());


var forest = function(){
  return  this.name+' forest dweller';
}

var animal = {
  Name: 'fox',
  age: 2,
  forest:forest,
  get name(){
    return this.Name;
},
set name(val){
    this.Name = val;
  }
};

var secondAnimal = {
  Name: 'wolf',
  age: 3,
  forest:forest,
  get name(){
    return this.Name;
},
set name(val){
    this.Name = val;
  }
};

var thirdAnimal = {
  Name: 'bear',
  age: 5,
  forest:forest,
  get name(){
    return this.Name;
},
set name(val){
    this.Name = val;
  }
};

console.log(animal.forest());
console.log(secondAnimal.forest());
console.log(thirdAnimal.forest());

console.log(animal.name);



  