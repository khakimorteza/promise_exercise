function testNum(num) {
  return new Promise((resolve, reject) => {
    resolve(num > 10);
  })
  // .then(bool => {
  //   console.log(bool);
  // })
}
// testNum(1)
console.log(testNum(1));

function whisperShout(str) {
  console.log(str);
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(str), 3000);
  }).then(result => {
    console.log(result.toUpperCase());
  });
}

console.log(whisperShout("baba"));

function waitFact(arr) {
  return new Promise((resolve, reject) => {
    arr.forEeach((el) => {
    setTimeout(() => resolve(el), 3000);
  }).then(result => {
    return factorialize(el);
  })
}
