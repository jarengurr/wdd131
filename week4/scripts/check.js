let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
let namesB = names.filter(name => name.charAt(0) === 'B');

let person = prompt(namesB, "Names that start with b");

let nameLengths = names.map((name) => name.length);
let person2 = prompt(nameLengths, "Names Lengths");

names.reduce((total, name) => total + name.length, 0) / names.length;
let person3 = prompt(names.reduce((total, name) => total + name.length, 0)/names.length, "Reduce");