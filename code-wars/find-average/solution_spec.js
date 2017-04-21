var E = require('./solution')
var assert = require("chai").assert

describe("Find average", function(){

  it('Ones', function(){
    assert.deepEqual(E.find_average([1,1,1]), 1)
  })

  it('One, Two, Three', function(){
    assert.deepEqual(E.find_average([1,2,3]), 2)
  })

})
