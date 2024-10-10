// babbling	result
// ["aya", "yee", "u", "maa"]	1
// ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2

//  "aya", "ye", "woo", "ma"

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))

function solution(babbling) {
  const possible = ["aya", "ye", "woo", "ma"]
  
  const answer = babbling.reduce((acc, ele) => {
    let restStr = ele
      possible.forEach(findInfo => {
        if (ele.indexOf(findInfo.repeat(2)) === -1) {
          restStr = restStr.replaceAll(findInfo, ' ')
        }
      })
      restStr = restStr.replaceAll(' ', '')
      if (restStr === '') {
        acc++ 
      }
    return acc
  }, 0)
  
  return answer;
}


// 다른사람거 정규식 사용
function solution2(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}