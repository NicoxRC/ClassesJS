const nombre = 'krakus'; //string
let edadTodos = 26; // number
const isActive = true; //bool
const nulo = null; // nada

const saludos = `El id: ${edadTodos} no existe`;

// ===
// !==
// >
// <
// >=
// <=
// &&
// ||
// !

const edad = 15;

const mayorEdad = edad >= 18;
const cc = true;

const hora = 12;

if (hora < 12) {
  console.log('buenos dias');
} else if (hora >= 12 && hora <= 18) {
  console.log('buenas tardes');
} else {
  console.log('buenas noches');
}

const saludo = hora <= 12 ? 'Buenos dias' : 'Buenas tardes';

console.log(saludo);
