// n	k	result
// 10	3	124,000
// 64	6	768,000

console.log(solution(64, 6))

function solution(n, k) {
  return (12000 * n) + (2000 * (k - parseInt(n / 10)));
}