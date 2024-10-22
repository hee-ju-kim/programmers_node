// n	result
// 45	7
// 125	229

console.log(solution2(125))

function solution(n) {
  const arr = new Array()
  const split = n.toString(3).split('')
  split.map((ele, i) => {
    arr[split.length - i - 1] = ele
  })
  
  return parseInt(arr.join(''), 3)
}

//
function solution2(n) {
  const split = n.toString(3).split('')
  return parseInt(split.reverse().join(''), 3)
}