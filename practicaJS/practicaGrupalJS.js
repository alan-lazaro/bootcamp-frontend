
/*1-
Crear una función constructora la cual vamos a llamar c deberá tener las siguientes propiedades:

ram:string
cpu:string
disco:string
gpu:boolean

 */

function Computadora(ram,cpu,disco, monitor,gpu){

    this.ram=ram;
    this.cpu=cpu;
    this.disco=disco;
    this.monitor=monitor;
    this.gpu=gpu;
    this.getDetalles = () => `Componentes:
    RAM: ${this.ram}
    CPU: ${this.cpu}
    DISCO: ${this.disco}
    MONITOR: ${this.monitor}
    GPU: ${this.gpu ? 'Si':'No'}
    `;

}
/*
2- Crear 5 computadoras distintas y guardarlas (Array) de manera que luego podamos consultar cuántas computadoras tenemos y poder mostrarlas por consola. Además queremos ver el detalle de cada computadora por consola.
*/


const computadora1 = new Computadora("16gb","Ryzen5 3600", "ssd","Samsung de 24p",true)
const computadora2 = new Computadora("16gb","Ryzen5 3600", "ssd","Samsung de 24p",true)
const computadora3 = new Computadora("16gb","Ryzen3 3200g", "ssd","Samsung de 24p",false)
const computadora4 = new Computadora("32gb","Ryzen3 3400g", "ssd","Samsung de 24p",false)
const computadora5 = new Computadora("16gb","Ryzen5 3600", "ssd","Samsung de 24p",true)

const arrayCompu = [computadora1,computadora2,computadora3,computadora4,computadora5];


arrayCompu.forEach(function(compu){

    console.log(compu.getDetalles())

    
})
/**
 3-Crear un nuevo Array a partir del primero, donde vamos a guardar solamente las computadoras con gpu.
 */

let computadorasConGPU= arrayCompu.filter(computadora =>computadora.gpu)


console.log(conGpu);









/*

4-Crear una función que calcule cuántos litros de nafta gasta un auto que consume 2 litros cada 100km, ingresando por parámetro la cantidad de kilómetros 
del recorrido a realizar. Luego crear una función que, a partir de ese dato, devuelva cuánto significa eso en pesos ingresando por parámetro el precio 
del litro de nafta.

*/


let litros = function (kms){
    return kms * 2 /100;
    
}

function dineroEnNafta(litros, precio){

    return litros * precio;

}


console.log(dineroEnNafta(litros(3000),20))


//5
let numeros=[];

for (let i = 1; i <= 100; i++) {
  numeros.push(i)
}

console.log(numeros)

const numerosDos = numeros.map((numero)=>numero * 2)
console.log(numerosDos)


//6
const numerosTres=numerosDos.filter((numero)=> numero > 5)

console.log(numerosTres)
//7
//Del array que devuelve el ejercicio 6, buscar el primero que sea mayor a 10

const primNum = numerosDos.find((numero)=>numero>10)
console.log(primNum)

//8
/*
Dado el siguiente array filtremos a los pokémons con poder menor a 10.


//Array:
let pokemones = [ 
{ nombre: 'pikachu', poder: 12 },
 { nombre: 'bulbasaur', poder: 6 },
 { nombre: 'charizard', poder: 19 },
 { nombre: 'squirtle', poder: 3 },
 { nombre: 'metwo', poder: 6 }, 
]
 */

let pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
     { nombre: 'bulbasaur', poder: 6 },
     { nombre: 'charizard', poder: 19 },
     { nombre: 'squirtle', poder: 3 },
     { nombre: 'metwo', poder: 6 }, 
    ]
    
    const pokemonesPoder = pokemones.filter((pokemon)=>pokemon.poder < 10)

    console.log(pokemonesPoder)



