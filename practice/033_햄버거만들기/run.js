// 1, 2, 3       빵, 야채, 고기
// 1, 2, 3, 1    빵 – 야채 – 고기 - 빵

// ingredient	result
// [2, 1, 1, 2, 3, 1, 2, 3, 1]	2
// [1, 3, 2, 1, 2, 1, 3, 1, 2]	0


console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))

function solution(ingredient) {
  const stack = []
  const answer = ingredient.reduce((acc, ele) => {
    stack.push(ele)
    if (stack.slice(-4).join('') === '1231') {
      stack.splice(-4)
      acc++
    }
    return acc
  }, 0)
  return answer;
}