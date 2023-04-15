function modulo (dividendo, divisor){
    if (divisor == 0) {
        return "no se puede realizar esta operacion"
    }
    return dividendo % divisor
}

module.exports = { modulo }
