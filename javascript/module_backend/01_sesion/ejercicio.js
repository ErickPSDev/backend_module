// crear una funcion que nos salude por nuestro nombre
//debe retornar el saludo en un string y usar el valor de retorno de la función para hacer un console.log

function sayMyName (myName){ //funcion normal
    return '¡Hola '+ myName 
}

myName = "Erick!"
console.log(sayMyName(myName))

//funcion flecha
let saludo = (nameFlecha) =>{
    return `Función Flecha: !Hola ${nameFlecha}`;
}

console.log(saludo('Erick 2!'));

// declaracion de funcion
function greeting(nameToGreeting){
    return `Hola ${nameToGreeting} Buenas noches!!`
}

//ejecutando funcion
const greetingToMe = greeting ("Erick") // pasr el valor de retorno a la variable
console.log('greetingToMe: ', greetingToMe)

const greetingToYou = greeting ("Arisa")
console.log('greetingToYou: ', greetingToYou)

// parael retorno de una funcion a otra
// una funcion que regrese nombres aleatorios.

function getNameRandom(){
    //index last = 6
    //length = 7 -> - cantidad de items
    const arrayNames = ["Erick", "Hannia", "Fernanda", "Jessica", "Heidel", "Gus", "Gaz"]
    // poder generar un indexRandom
    const indexRandom = math.floor(Math.random() * (arrayNames.length - 0) + 0 )
    return arrayNames[indexRandom]// String
}

console.log('name random: ', getNameRandom())

//paasar el return de una funcion a otra funcion

const greetingRandom = greeting(getNameRandom()) // greeting ('')
console.log('greetingRandom', greetingRandom)

const nameRandom = getNameRandom ()
console.log('otherGreeting: ', greeting(nameRandom))