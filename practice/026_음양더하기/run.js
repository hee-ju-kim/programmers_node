// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0


console.log(solution([1,2,3], [false,false,true]))

function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, ele, index) => {
    const coefficient = (signs[index] ? 1 : -1)
    acc += coefficient * ele;
    return acc
  }, 0)

  return answer
}