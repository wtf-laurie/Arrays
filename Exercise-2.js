var myPenguin = {
	name: 'Gunter',
	realName: 'Orgalorg',
	gender: 'Unsure',
	origin: 'Adventure Time',
	author: 'Pendelton Ward',
	age: 'Unknown',
};

var selfIntro = "Hello, I'm a penguin and my name is Orgalorg, but people call me Gunter!";
console.log(selfIntro);

myPenguin.canFly = false;

myPenguin.chirp = function() {
	return "CHIRP CHIRP! Is this what penguins sound like?";
};

console.log(myPenguin.chirp());

myPenguin.sayHello = function() {
	return "Hello, I'm a penguin and my name is " + this.name;
};

console.log(myPenguin.sayHello());

myPenguin.name = 'Penguin McPenguinFace';

console.log(myPenguin.sayHello());

myPenguin.fly = function() {
	if (this.canFly == true) {
		console.log("I can fly!");
	}
	else {
		console.log("No flying for me!");
	}
};

myPenguin.fly();

myPenguin.canFly = true;

myPenguin.fly();

var key = ' ';
var i;
for (i in myPenguin) {
	key += i + ", ";
};

console.log(key);

var value = ' ';
var v;
for (v in myPenguin) {
	value += myPenguin[v];
};

console.log(value);
