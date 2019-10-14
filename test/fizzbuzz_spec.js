let should = chai.should()
describe('Test fizzBuzz function', function () {
  it('If input integer can be divisible by 3 return Fizz.', function () {
    let input = fizzBuzz(6)
    let expect = "Fizz"
    input.should.be.equal(expect)
  })

  it('If input integer can be divisible by 5 return Buzz.', function () {
    let input = fizzBuzz(10)
    let expect = "Buzz"
    input.should.be.equal(expect)
  })

  it('If input integer can be divisible by 3 & 5 return FizzBuzz.', function () {
    let input = fizzBuzz(15)
    let expect = "FizzBuzz"
    input.should.be.equal(expect)
  })

  it('If input integer cannot be divisible by 3 or 5 return input integer.', function () {
    let input = fizzBuzz(7)
    let expect = input
    input.should.be.equal(expect)
  })
})