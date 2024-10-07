// x	return
// 10	true
// 12	true
// 11	false
// 13	false

console.log(solution(10))

function solution(x) {
  const arr = [...x.toString()]
  const tmp = arr.reduce((acc, ele) => {
    acc += parseInt(ele)
    return acc
  }, 0)

  return x % tmp === 0
}