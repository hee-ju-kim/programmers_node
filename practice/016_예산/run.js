// d	budget	result
// [1,3,2,5,4]	9	3
// [2,2,3,3]	10	4

console.log(solution([1,3,2,5,4], 9))

function solution(d, budget) {
  d.sort((a, b) => a - b)
  let tmp = 0
  let index = 0
  let answer = 0
  while ((tmp + d[index]) <= budget) {
    tmp += d[index]
    answer++
    index++
  }
  return answer;
}


// 다른사람거
function solution2(d, budget) {
  return d.sort((a, b) => a - b).reduce((count, price) => {
    return count + ((budget -= price) >= 0);
  }, 0);
}