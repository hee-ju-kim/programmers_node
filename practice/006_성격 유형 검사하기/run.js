// survey	choices	result
// ["AN", "CF", "MJ", "RT", "NA"]	[5, 3, 2, 7, 5]	"TCMA"
// ["TR", "RT", "TR"]	[7, 1, 3]	"RCJA"
// ["RT", "RT", "RT", "RT", "RT", "RT", "RT"], [1, 2, 3, 4, 5, 6, 7] "RCJA"

console.log(solution(["RT", "RT", "RT", "RT", "RT", "RT", "RT"], [1, 2, 3, 4, 5, 6, 7]))

function solution(survey, choices) {

  const score = {
    1: 3,
    2: 2,
    3: 1,
    5: 1,
    6: 2,
    7: 3
  }

  const tmp = survey.reduce((acc, ele, index) => {
    let text
    let arr = [...ele]
    if (choices[index] < 4) {
      text = arr[0]
    } else if (choices[index] > 4) {
      text = arr[1]
    }

    if (text) {
      acc[text] += score[choices[index]]
    }
   
    return acc
  }, { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 })
  
  const tmp2 = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']]
  let result = tmp2.reduce((acc, ele) => {
    const char1 = ele[0]
    const char2 = ele[1]
  
    let result
    if (tmp[char1] > tmp[char2]) {
      result = char1
    } else if (tmp[char2] > tmp[char1]) {
      result = char2
    } else {
      result = char1.charCodeAt(0) > char2.charCodeAt(0) ? char2 : char1
    }
    
    return acc + result
  }, '')

  return result
}