var E = require('./solution')
var assert = require("chai").assert

describe("formatMoney", () => {

  it('Formats numbers into dollars and cents', () => {
    assert.deepEqual(E.formatMoney(39.99), '$39.99')
  })

  it('Appends .00 to whole numbers', () => {
    assert.deepEqual(E.formatMoney(350), '$350.00')
  })

  it('Corrects cents to the second decimal place', () => {
    assert.deepEqual(E.formatMoney(33.33333333), '$33.33')
  })

})
