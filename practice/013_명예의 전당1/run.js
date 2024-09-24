// https://school.programmers.co.kr/learn/courses/30/lessons/138477?language=javascript

// k	score	result
// 3	[10, 100, 20, 150, 1, 100, 200]	[10, 10, 10, 20, 20, 100, 100]
// 4	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	))

function solution(k, score) {
  let tmpArr = []
  const tmp = score.reduce((acc, ele, index) => {
    if (index < k) {
      tmpArr.push(ele)
    } else {
      const eleIndex = tmpArr.findIndex(tmpEle => tmpEle < ele)
      if (eleIndex > -1) {
        tmpArr[eleIndex] = ele
      }
    }
    tmpArr.sort((a, b) => a - b)
    acc.push(tmpArr[0])
    return acc
  }, [])
  
  return tmp;
}