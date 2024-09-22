// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]

console.log(solution2([1, 5, 2, 6, 3, 7, 4],	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))

function solution(array, commands) {
  const answer = commands.reduce((acc, ele) => {
    const tmpArr = array.slice(ele[0] - 1, ele[1]).sort((a, b) => a - b)
    acc.push(tmpArr[ele[2] - 1])
    return acc
  }, []);
  
  return answer;
}

// 다른사람 풀이
function solution2(array, commands) {
  // reduce말고 map씀
  return commands.map(command => {
    // 구조분해할당으로 command의 내부요소를 더 정확히 알 수 있음
    const [sPosition, ePosition, position] = command
    // slice말고 filter로 조건에 맞는 array로 만듦
    const newArray = array
      .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
      .sort((a,b) => a - b)    
    // 리턴
    return newArray[position - 1]
  })
}
