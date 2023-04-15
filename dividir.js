function dividir(num1, num2) {
    if (num2 == 0) {
        return "no se puede dividir por cero"
    }
    return num1 / num2
}
module.exports = { dividir }