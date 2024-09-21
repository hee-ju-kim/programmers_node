// num	return
// 3	"Odd"
// 4	"Even"

console.log(solution(4))

function solution(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}