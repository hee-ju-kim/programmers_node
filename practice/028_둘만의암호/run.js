// 입출력 예
// s	skip	index	result
// "aukks"	"wbqd"	5	"happy"

console.log(solution("aukks",	"wbqd",	5))

function solution(s, skip, index) {
  const skipJson = skip.split('').reduce((acc, ele) => {
    acc[ele] = true
    return acc
  }, {})

  function jump (char) {
    const tmp = []
    const zCode = 'z'.charCodeAt()
    let i = 1
    while(tmp.length < index) {
      if (char.charCodeAt() + i > zCode) {
        char = 'a'
        i = 0
      }
      const tmpChar = String.fromCharCode(char.charCodeAt() + i)

      if (!skipJson[tmpChar]) {
        tmp.push(tmpChar)
      }
      i++
    }
    return tmp[index - 1]
  }
  const str = s.split('').reduce((acc, ele) => {
    acc += jump(ele)
    return acc
  }, '')

  return str;
}