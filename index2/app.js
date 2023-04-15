const { restar } = require("../restar")
const { sumar } = require("../sumar")
const { multiplicar } = require("../multiplicar")
const { dividir } = require("../dividir")

const { exponenciar } = require("../exponenciar")
const { modulo } = require("../modulo")

const resultadoExponenciar = exponenciar(2, 2)
const resultadoModulo = modulo(3, 0)

const resultadoRestar = restar(9, 8)
const resultadoSumar = sumar(5, 7)
const resultadoMultiplicar = multiplicar(2, 4)
const resultadoDividir = dividir(6, 0)
console.log(resultadoSumar, resultadoRestar, resultadoMultiplicar, resultadoDividir, resultadoExponenciar, resultadoModulo)



