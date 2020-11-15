//PARÁMETROS
//Con JS Normal
function newFunction(edad, nombre){
    var edad = edad || 29;
    var nombre = nombre || 'Amilcar';
    console.log(edad, nombre);
}
//Parametros con ES6 
function newFunction2(edad = 20, nombre = 'Amilcar'){
    console.log(edad, nombre);
}
newFunction2();
newFunction2(34, 'Pedrito Sola');

let hola = 'Holis';
let mundo = 'Mundo';

//CONCATENACIÓN
//JS Normal
let frase = hola + '  ' + mundo;

//Con ECMAScript (Template literals)
let frase2 = `${hola} ${mundo}`;

console.log(frase2); 

//MULTILINEA
//Multilinea con JS Normal
let lorem = 'lorem ipsum \n'
+ 'seguimos escribiento aldo chido';

//Multilenea con ES6
let lorem2 = `seguimos utilizando multilineea pero ahora con la 
especificación de es6
`;
console.log(lorem2);

//DESESTRUCTURACIÓN

//Este es un objeto
let persona = {
    'nombre': 'Amilcar',
    'apellido': 'Serrano',
    'edad': 29
}
console.log(persona.nombre, persona.apellido, persona.edad);

//Aplicando la desestructuración
let {nombre, apellido, edad} = persona; //Desestructuramos el objeto
console.log(nombre, apellido, edad);


//OPERADOR DE PROPAGACIÓN (SPREAD OPERATOR ...)
let team1 = ['Am', 'Rs', 'Ab'];
let team2 = ['Pedro', 'José', 'Junior'];

let dreamTeam = ['Ardilla', ...team1, ...team2];

console.log(dreamTeam);

//VAR, LET Y CONST
//VAR alcance global
//LET alcance local
//CONST se usa para declarar constantes

{
    var globalVar = 'Global var';
    //var tiene un alcance global por lo tanto al hacer un console.log este entrará al bloque y mostrtará el contenido de la variable
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
    //let es de alcance local por lo que solo podrá ser accedida desde su mismo bloque y no desde otro lugar del código.
}
console.log(globalVar);


const a = 'a';
a = 'b';
console.log(a); //Error por que no podemos cambiar valor de al estar definida como const