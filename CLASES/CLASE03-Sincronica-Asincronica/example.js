// FUNCTION LIKE PARAMS

// POR CONVENCION DEBERIA ESTAR COMO ULTIMO PARAMETRO EL CALLBACK
//EJECUTAR DE ULTIMO EL CALLBACK

const ejecutar = (func, param) => func(param)

const saludar = (nombre) => `hola ${nombre}`

console.log(ejecutar(saludar, "elena"))

// CALLBACK ES UNA FUNCION QUE SE ENVIA COMO PARAMETRO 

//2.   

const operation = (param1, param2, func) => func(param1, param2)


const suma = (param1, param2) => param1 + param2

const multiplica = (param1, param2) => param1 * param2

const divide = (param1, param2) => {

    if (param2 !== 0) {
        return param1 / param2
    }
    return "no se puede dividir por cero"
}

//console.log(operation(2, 0, divide));

// PROMISE

function dividir(dividendo, divisor) {
    //respetar el orden resolve / reject porque New Promise es una clase definida
    //y con el primer parametro hace resolve y con el segundo reject

    return new Promise((resolve, reject) => {
        if (divisor == 0) {
            reject('no se puede dividir por cero')
        } else {
            resolve(dividendo / divisor)
        }

    })
}

/* dividir(10, 5)
    .then(resultado => {
        console.log(`resultado: ${resultado}`)
    })
    .catch(error => {
        console.log(`error: ${error}`)
    }
    ) */

dividir(10, 0)
    .then(response => response * 2)
    .then(response => response - 4)
    .then(response => console.log(response))
    .catch(error => console.log(`error: ${error}`));
