function Animal(name, age, kind){
  this.name = name;
  this.age = age;
  this.kind = kind;
  this.awake = false;
};

Animal.prototype.oink = function(){
  if (this.kind === 'Pig'){
    return 'oink';
  } else {
    return "I'm not a pig";
  }
};

Animal.prototype.growUp = function() {
  this.age++;
};

Animal.prototype.feed = function() {
  if (this.awake) {
    return "NOM NOM NOM";
  }
};

Animal.prototype.wakeUp = function() {
  this.awake = true;
};

Animal.prototype.sleep = function() {
  this.awake = false;
};

var pig = new Animal('Babe', 2, 'Pig');
console.log(pig instanceof Animal);

module.exports = Animal;
