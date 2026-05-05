//Objetos

const persona = {
  'nombre principal': 'Juan',
  apellido: 'Perez',
  edad: 30,
  trabajo: {
    empresa: 'Google',
    puesto: 'Desarrollador',
  },
  saludar() {
    console.log(
      `Hola, mi nombre es ${this['nombre principal']} ${this.apellido} y tengo ${this.edad} años.`,
    );
  },
};

// console.log(persona.apellido);
// console.log(persona['nombre principal']);

// persona.saludar();

persona.email = 'juan@email.com';
// console.log(persona);

// console.log(Object.keys(persona)); // Devuelve un array con las claves del objeto
// console.log(Object.values(persona)); // Devuelve un array con los valores del objeto
// console.log(Object.entries(persona)); // Devuelve un array con los pares clave-valor del objeto

class Persona {
  constructor(nombre, apellido, edad) {
    this['nombre principal'] = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
}

const juancho = new Persona('Juancho', 'Perez', 25);
// console.log(juancho);

//Metodos arrays

const numeros = [1, 2, 3, 4, 5];

//agregacion
// console.log(`Array original:`);
// console.log(numeros);

numeros.push(6); // Agrega un elemento al final del array
numeros.pop(); // Elimina el último elemento del array

// console.log(`Array con cambios:`);
// console.log(numeros);

//map
const numerosDuplicados = numeros.map((num) => num * 2);
// console.log(numerosDuplicados);

//filter
const numerosPares = numeros.filter((num) => num % 2 === 0);
// console.log(numerosPares);

//Combinacion
const numerosParesDuplicados = numeros
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2);

// console.log(numerosParesDuplicados);

//reduce
const sumaTotal = numeros.reduce((acumulador, num) => {
  return acumulador * num;
}, 10);
// console.log(sumaTotal);

// Tienes un arreglo de objetos donde cada objeto representa un producto vendido con las propiedades nombre, precio y cantidad.

// Usando un solo reduce(), obtén:
// El total recaudado (suma de precio × cantidad)
// El producto más caro
// El total de unidades vendidas

const productos = [
  { nombre: 'Laptop', precio: 1200, cantidad: 3 },
  { nombre: 'Mouse', precio: 25, cantidad: 10 },
  { nombre: 'Teclado', precio: 80, cantidad: 7 },
  { nombre: 'Monitor', precio: 350, cantidad: 2 },
  { nombre: 'Audífonos', precio: 60, cantidad: 5 },
];

const result = productos.reduce(
  (acc, producto) => {
    const subTotal = producto.precio * producto.cantidad;
    return {
      totalRecaudado: acc.totalRecaudado + subTotal,
      totalUnidad: acc.totalUnidad + producto.cantidad,
      masCaro:
        producto.precio > acc.masCaro.precio
          ? { nombre: producto.nombre, precio: producto.precio }
          : acc.masCaro,
    };
  },
  {
    totalRecaudado: 0,
    totalUnidad: 0,
    masCaro: { nombre: '', precio: 0 },
  },
);

console.log(result);
