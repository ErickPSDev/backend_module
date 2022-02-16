const procesoInscripcion = { //inicialización de variable con propiedades
    entrevistar: false,
    ofertar: false,
    inscripcion: false,
    asistencia: false
}

//declaración de las funciones
function entrevistar (koderAEntrevistar){
    console.log('Entrevistando a posible Koder ... 💻')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            koderAEntrevistar.entrevistar = true
            if (koderAEntrevistar.entrevistar){
                resolve (koderAEntrevistar)
            } else {
                reject ('No se pudo entrevistar a la persone 😒')
            }
        }, 2000)
    })
}
function ofertar (koderRecibeOferta){
    console.log ('Realizando Oferta... 💸')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            koderRecibeOferta.ofertar = true
            if (koderRecibeOferta.ofertar){
                resolve(koderRecibeOferta)
            } else {
                reject('Oferta sin Exito')
            }
        }, 2000)
    })

}
function inscripcion (koderAInscribirse){
    console.log('koder inscribiendose...📦 ')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            koderAInscribirse.inscripcion = true
            if (koderAInscribirse.inscripcion){
                resolve(koderAInscribirse)
            } else {
                reject('La inscripción no se ha realizado con exito')
            }
        }, 2000)
    })
}
function asistencia (koderAsistiendo){
    console.log ('Koder asistira a clases? 💻💸')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            koderAsistiendo.asistencia = true
            if (koderAsistiendo.asistencia){
                resolve (koderAsistiendo)
            } else {
                reject ('No asiste Koder...')
            }
        },2000)
    })
}
//              -  THEN Y CATCH  -
entrevistar (procesoInscripcion)
 .then((koderAEntrevistar) => {
     console.log ("Koder Entrevistado:", koderAEntrevistar)

     ofertar (koderAEntrevistar)
     .then((koderRecibeOferta) => {
         console.log('Koder Recibe Oferta: ', koderRecibeOferta)

         inscripcion (koderRecibeOferta)
         .then((koderAInscribirse) => {
             console.log('Koder Inscrito: ', koderAInscribirse)

             asistencia (koderAInscribirse)
             .then((koderAsistiendo) => {
                 console.log('Koder Asistiendo a clases: ', koderAsistiendo)

             })
         })
     })
 })
/*           -         ASYNC Y AWAIT            -

//async -> marca a una funcion como asincrona
//await -> esperar la ejecución de una proemsa

// PARA USAR UN AWAIT NECESITAMOS UNA FUNCIÓN A LA QUE MARCAREMOS COMO ASYNC

async function main (){
    const koderEntrevistado = await entrevistar (procesoInscripcion)
    console.log('koder Entrevistado: ', koderEntrevistado)
    const koderOfertado = await ofertar (koderEntrevistado)
    console.log ('Koder ha aceptado la oferta')
    const KoderInscrito = await inscripcion (koderOfertado)
    console.log('koder se ha inscrito')
    const koderAsistiendo = await asistencia (KoderInscrito)
    console.log('Koder Asiste a las Klases')
}

main ()
.then (() => {
    console.log('Todo chido')
})
.catch ((error) => {
    console.error ('Algo ha salido mal', error)
})
*/