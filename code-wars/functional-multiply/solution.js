const multiplyAll = arr => num => arr.map(n => n * num)

// same as--^^
// const multiplyAll = (arr) => {
//   return (multiply_all) => {
//     return arr.map((num) => {return num * multiply_all})
//   }
// }

module.exports = {multiplyAll: multiplyAll}