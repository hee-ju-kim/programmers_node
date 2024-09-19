console.log(solution(3,10))

function solution(start_num, end_num) {
  const answer = new Array(end_num - start_num + 1).fill(start_num).map((x, i) => x + i)
  return answer
}