let str = require('./test.js')

console.log(str)

let test = () => {
  console.log('test - 1')
}

test()

@log
class testA {
  a = 1
}

let a = new testA()

console.log(a.a)

function log (target) {
  console.log('1')
  console.log(target , '23')
}