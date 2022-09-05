"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/* const obj = {name: 'coder'}
const name = obj?.name
 */
//configuracion de bable se hace con un archivo llamdo .babelrc
//cuando veamos un archivo de .algo es un archivo de configuracion
// en seccion Try it out puedes configurar varios preset
//debo hacer una configuracion en el package Json que nos permita hacer la transpilacion
//config:     "build": "babel ./origin.js -o ./destino.js -w", 
var getNumber = function getNumber() {
  return Math.floor(Math.random() * 256);
}; //hasta 255 incluido y ademas garantizar enteros


var Color = /*#__PURE__*/function () {
  function Color() {
    _classCallCheck(this, Color);
  }

  _createClass(Color, [{
    key: "get",
    value: function get() {
      var color = "rgb(".concat(getNumber(), ",").concat(getNumber(), ",").concat(getNumber(), ")");
    }
  }]);

  return Color;
}();

var color = new Color();
console.log(color.get());
