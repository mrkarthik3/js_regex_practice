let reg = /[A-Z]*/
let text = "She sells seashells at the sea shore."

console.log(reg.test(text))
console.log(reg.exec(text))
