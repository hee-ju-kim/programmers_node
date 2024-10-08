// k	tangerine	result
// 6	[1, 3, 2, 5, 4, 5, 2, 3]	3
// 4	[1, 3, 2, 5, 4, 5, 2, 3]	2
// 2	[1, 1, 1, 1, 2, 2, 2, 3]	1

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]))

function solution(k, tangerine) {
  const tmp = tangerine.reduce((acc, ele) => {
    acc[ele] = acc[ele] ? ++acc[ele] : 1
    return acc
  }, {})
  
  const tmp3 = Object.values(tmp).sort((a, b) => b - a)
  
  let tmp4 = 0;
  let answer = 0;
  for (let i = 0; tmp4 < k; i++) {
    tmp4 += tmp3[i]
    answer++
  }
  
  return answer;
}