var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
};

Zoo.prototype.changeLocation = function(location) {
  this.location = location;
};

Zoo.prototype.open = function() {
  this.status = 'open';
};

Zoo.prototype.close = function() {
  this.status = 'closed';
};

Zoo.prototype.isOpen = function() {
  if (this.status === 'open') {
    return "Open!";
  } else {
    return "Closed.";
  }
};

Zoo.prototype.addAnimal = function(animal) {
  if (this.status === 'open' && this.animals.indexOf(animal) === -1 && (animal instanceof Animal)) {
    this.animals.push(animal);
  }
};

Zoo.prototype.removeAnimal = function(animal) {
  if (this.status === 'open' && this.animals.indexOf(animal) !== -1) {
    this.animals.splice(this.animals.indexOf(animal,1));
  }
};

module.exports = Zoo;
