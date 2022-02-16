// las promesas son objetos

//constructor
//resolve -> es una funcion que nos permite pasar la promesa pendiente a resuelta
// reject -> es una funcion que nos permite pasar la promesa pendiente a rechazada
/*
const myPromise = new Promise ((resolve,reject) => {
    // logica interna
    const todoBien = false
    if(todoBien) {
        resolve ('oki primero')
    } else {
        reject('Todo salio mal ... alv primero')
    }
})

// Los objetos de tipo promesa cuentan con 2 métodos

//then () -> Se ejecuta cuando la promesa se resolvio exitosamente
  // Recibe lo que mandamos en la funcion resolve ()
  // catch () -> se ejecuta caundo la promesa ha sido rechazada.
  //Recibe lo que mandamos en la funcion reject()

  myPromise
       .then((valor) => {console.log(valor)})
       .catch((error) => {console.log(error)});

// WRAPPER es una funcion.

function myFirstPromise () {
    return new Promise ((resolve, reject) => {
        // logitca interna
        const todoBien = true
        if (todoBien){
            resolve ('oki segundo')
        } else {
            reject ('todo salio mal x2')
        }
    } )
}

// const myFirstPromise = () => {
// return new Promise () => {})
// }
// const my FirstPromise

// Para definir funciones function
// callbacks -> arrow functions

myFirstPromise ()
.then((result) => {console.log (result)})
.catch ((error) => {console.log (error)})
*/

const muro = {
    estaConstruido: false,
    estaAplanado: false,
    estaPintado: false
}

function construir (muroAConstruir) {
    console.log ('Construyendo el muro ...')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            muroAConstruir.estaConstruido = true
            if (muroAConstruir.estaConstruido){
                resolve (muroAConstruir)
            } else {
                reject ('No se pudo construir el muro')
            }
        }, 2000)
    })
}

function aplanar (muroAAplanar) {
    console.log ('Aplanando el muro ...')
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            muroAAplanar.estaAplanado = true
            if (muroAAplanar.estaAplanado){
                resolve (muroAAplanar)
            } else {
                reject ('No se pudo aplanar el muro ...')
            }
        }, 2000)
    })

}

function pintar(muroAPintar) {
    console.log ('Pintando el muro ...')
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            muroAPintar.estaPintado = true
            if (muroAPintar.estaPintado){
                resolve (muroAPintar)
            } else {
                reject ('No se pudo pintar el muro..')
            }
        }, 2000)
    })
}
/*
construir (muro)
.then((muroConstruido) => {
    console.log ('Muro construido: ', muroConstruido)

    aplanar(muroConstruido)
    .then((muroAplanado) => {
        console.log('Muro aplanado: ', muroAplanado)

        pintar(muroAplanado)
        .then ((muroPintado) => {
            console.log('Muro pintado: ', muroPintado)
        })
        .catch((error) => {
            console.error('Error al pintar: ', error)
        })
    })
})
.catch((error) => {
    console.error('Error al construir: ', error)
})
*/
//           -         ASYNC Y AWAIT            -

//async -> marca a una funcion como asincrona
//await -> esperar la ejecución de una proemsa

// PARA USAR UN AWAIT NECESITAMOS UNA FUNCIÓN A LA QUE MARCAREMOS COMO ASYNC

async function main () {
    const muroConstruido = await construir (muro)
    console.log('Muro construido: ', muroConstruido)
    const muroAplanado = await aplanar (muroConstruido)
    console.log('Muro aplanado: ', muroAplanado)
    const muroPintado = await pintar (muroAplanado)
    console.log('Muro Pintado: ', muroPintado)
}

main() // main es asincrono te regresa una promesa por defecto
.then (() => {
    console.log('Todo chido')
})
.catch ((error) => {
    console.log ('Error: ', error)
})

/* 
1.- Hacer el la actividad del proceso de registro de Kodemia y hacerla
en promesas.

then y catch
luego asyn / await.

2.- Consumir el modulo del FS de node que brinda con las
*/

// 3.- falta la asincrona
