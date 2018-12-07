var colors = ["Red", "Orange", "Yellow", "Green", "Blue"];
console.log(colors[0]);
console.log(colors[2]);

colors[4] = "Ultraviolet";
var fourthcolor = colors[3];
colors.push("Purple");

colors.unshift("White");

console.log(colors.length);
colors.pop(colors[5]);
console.log(colors.length);

var i;
for(i=0; i<colors.length; i++) {
	console.log(colors[i]);
};

for(i=0; i<colors.length; i++) {
	console.log(i, colors[i]);
};

var lastColor = colors[colors.length-1];
console.log(lastColor);