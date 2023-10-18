//every closure is nested
//but not every nested is closure
//closure keeping variable
getScorePass = (scores) =>
  (cuttingPoint = (cuttingScore) =>
    scores.filter((score) => score >= cuttingScore))

let fn1 = getScorePass([50, 32, 57, 29, 100])
console.log(fn1(40))
