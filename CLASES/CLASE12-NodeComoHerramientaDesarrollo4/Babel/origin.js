/* const obj = {name: 'coder'}
const name = obj?.name
 */
//configuracion de bable se hace con un archivo llamdo .babelrc
//cuando veamos un archivo de .algo es un archivo de configuracion

// en seccion Try it out puedes configurar varios preset

//debo hacer una configuracion en el package Json que nos permita hacer la transpilacion
//config:     "build": "babel ./origin.js -o ./destino.js -w", 

const getNumber = () => Math.floor(Math.random() * 256) //hasta 255 incluido y ademas garantizar enteros

class Color{
  
  get(){
      const color = `rgb(${getNumber()},${getNumber()},${getNumber()})`
  }
}

const color = new Color()

console.log(color.get())
