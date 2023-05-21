// Import stylesheets
import './style.css';

// let name = 'Adrián';

// let name2 = name;

// name2 = 'Agostina';

// console.log(name);
// console.log(name2);

// const user = {
//   name: 'Adrian',
// };

// const user2 = user;

// user2.name = 'Agostina';

// console.log(user);

// console.log(user2);

// const sumar = (pepe = 10, pepa = 5) => {
//   return param1 + param2;
// };

// const pepe = 4;
// const pepa = 5;

// const rta = sumar(2000, 300);

// console.log(rta);

// const rta = sumar(pepe, pepa)
// console.log(a + b)
// sumar(1, 2)

// const value = '123';

// console.log(value === '123' ? 'Correcto' : 'Incorrecto');

// const user2 = {
//   name: 'Pepe',
// };

// const user = {
//   name: 'Adrian',
//   lastname: 'Solimano',
//   email: 'asd@asd.com',
//   children: user2,
//   ["viewId"]: "Propiedad computada"
// };

// const extra = {
//   country: 'Argentina',
//   city: 'Mar del Plata',
// };

// const rta = { ...user, ...extra, otra: "Lorem Ipsum" };

// const name = "Pedro"

// const { name: nameUser } = user;

// console.log(nameUser)

// const { a: asd, b: rrr } = {a: "Hola", b: "pepe"}

// console.log(asd)

// const numbers = [3, 5, 7, 10, 5];

// const elem = numbers.find((n) => {
//   console.log(n)
//   return n === 2
// })

// console.log(elem)

const pacientes = [
  { id: 1, nombre: 'Martin', apellido: 'Pérez', edad: '33' },
  { id: 2, nombre: 'Lucía', apellido: 'García', edad: '25' },
  { id: 3, nombre: 'Marcos', apellido: 'Benítez', edad: '12' },
  { id: 4, nombre: 'Sandra', apellido: 'López', edad: '47' },
];

const buscar = (ape, array) => {
  for (let i = 0; i < array.length; i++) {
    const { apellido } = array[i];

    if (apellido === ape) {
      return array[i];
    }
  }
  return 'No se encontró';
};

const {id, edad} = buscar('Benítez', pacientes);
console.log(id, edad);
