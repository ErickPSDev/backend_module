/*
construir, aplanar y pintar un muro

1 - construir el muro
2 - aplanar el muro
3 - pintar el muro

*/
/*
const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

function construir (muroAConstruir){ //declaración de la función
    muroAConstruir.estaConstruido = true
    return muroAConstruir
}

function aplanar (muroAAplanar) {
    muroAAplanar.estaAplanado = true
    return muroAAplanar
}

function pintar (muroAPintar){
    muroAPintar.estaPintado = true
    return muroAPintar
}
// llamar las funciones

const muroConstruido = construir(muro)
console.log('muroConstruido: ', muroConstruido)
const muroAplanado = aplanar(muroConstruido)
console.log('muroAplanado: ', muroAplanado)
const muroPintado = pintar(muroAplanado)
console.log('muroPintado: ', muroPintado)

//Asincrona

function construir2 (){
    setTimeout (() => {
        muroAConstruir.estaConstruido = true

    }, 3000)
}

// ejemplo de sincronia

//console.log ('Hola...') 
//construir()
//console.log('Adios...')

//function 

/*
Proceso inscripción a Kodemia

1.Entrevista
2.Oferta
3.Inscripción
4.Asistir a clases
*/


const koder = {
    entrevistado: false,
    oferta: false,
    inscrito: false,
    asistencia: false
}
//DECLARACIÓN DE FUNCIONES

function entrevista (tomarLaEntrevista){
    tomarLaEntrevista.entrevistado = true
    return tomarLaEntrevista
}

function ofertar (recibirLaOferta){
    recibirLaOferta.oferta = true
    return recibirLaOferta
}

function inscribir (realizarInscripcion){
    realizarInscripcion.inscrito = true
    return realizarInscripcion
}

function asistir (asistirAClases){
    asistirAClases.asistencia = true
    return asistirAClases
}

//LLAMANDO FUNCIONES
const koderEntrevistado = entrevista(koder)
console.log('koder Entrevistado: ', koderEntrevistado)

const koderOfertado = ofertar (koderEntrevistado)
console.log('Koder Ha recibido Oferta: ', koderOfertado)

const KoderInscrito = inscribir (koderOfertado)
console.log('Koder inscrito: ',KoderInscrito )

const koderAsistiendo = asistir (KoderInscrito)
console.log('El Koder esta asistiendo: ', koderAsistiendo)
