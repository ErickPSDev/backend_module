/*
construir, aplanar y pintar un muro

1 - construir el muro
2 - aplanar el muro
3 - pintar el muro

*/

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

// se inicializan los valores de la constante koder, en false.
const koder = {
    entrevistado: false,
    oferta: false,
    inscrito: false,
    asistencia: false
}
//DECLARACIÓN DE FUNCIONES
/*
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
*/
/*//LLAMANDO FUNCIONES
const koderEntrevistado = entrevista(koder)
console.log('koder Entrevistado: ', koderEntrevistado)

const koderOfertado = ofertar (koderEntrevistado)
console.log('Koder Ha recibido Oferta: ', koderOfertado)

const KoderInscrito = inscribir (koderOfertado)
console.log('Koder inscrito: ',KoderInscrito )

const koderAsistiendo = asistir (KoderInscrito)
console.log('El Koder esta asistiendo: ', koderAsistiendo)
*/
// Convertir sincrona en asincrona

//Declaración de función
function tomarEntrevista (koderAEntrevistar, callback) {
    setTimeout ( () => {
        let error = null
        koderAEntrevistar.entrevistado = true
        if (koderAEntrevistar.entrevistado === false){
            error = "No se pudo entrevistar"
        }
        callback(error, koderAEntrevistar)
    }, 3500)
}

function recibirOferta (koderRecibeOferta, callback){
    setTimeout ( () => {
        let error = null
        koderRecibeOferta.oferta = true
        if (koderRecibeOferta.oferta === false){
            error = "No se recibio oferta"
        }
        callback(error, koderRecibeOferta)
    }, 3500)    
}

function inscribirse (koderAInscribirse, callback){
    setTimeout( () => {
        let error = null
        koderAInscribirse.inscrito = true
        if (koderAInscribirse.inscrito === false){
            error = "No se inscribio"
        }
    }, 3500)
}

function asistirAClases (koderAsiste, callback){
    setTimeout( () => {
        let erorr = null
        koderAsiste.asistencia = true
        if (koderAsiste.asitencia === false){
            error = "No asiste"
        }    
    }, 3500)
}