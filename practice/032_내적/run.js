// a	b	result
// [1,2,3,4]	[-3,-1,0,2]	3
// [-1,0,1]	[1,0,-1]	-2


console.log(solution([-1,0,1], [1,0,-1]))

function solution(a, b) {
  const answer = a.reduce((acc, ele, index) => {
    acc += ele * b[index]
    return acc
  }, 0)
  return answer;
}
