//Loops
const number = 8;

for (let i = 0; i < number; i++) {
  //   console.log(i);
}

const array = [20, 21, 25, 27];

for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]);
}

const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
  //   console.log(fruit);
}

let contador = 0;

while (contador <= 5) {
  //   console.log(contador);
  contador++;
}

//Functions

function sum(a = 5, b = 4) {
  return a + b;
}

const greeting = (name) => {
  console.log(`Hello, ${name}!`);
};

console.log(sum(10, 8));
console.log(sum(8));
greeting('Nico');
