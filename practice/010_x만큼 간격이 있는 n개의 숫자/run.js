// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

console.log(solution(-4, 2))

function solution(x, n) {
  const answer = new Array(n).fill().map((_, index) => (index + 1) * x);
  return answer;
}

// 다른사람 풀이
function solution(x, n) {
  // fill로 x값을 채우고 인덱스 + 1 * ele
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
