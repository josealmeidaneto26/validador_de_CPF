/** @jest-environment jsdom */

const { validarCPF } = require("./script")

test("Testar CPF valido", function() {
var valido = validarCPF('58914324044');
expect(valido).toBe(true)
})

test("Testar CPF nao  valido", function() {
    var nvalido = validarCPF('23456765432');
    expect(nvalido).toBe(false)
    })