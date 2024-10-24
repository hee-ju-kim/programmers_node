// keymap	targets	result
// ["ABACD", "BCEFD"]	["ABCD","AABB"]	[9, 4]
// ["AA"]	["B"]	[-1]
// ["AGZ", "BSSS"]	["ASA","BGZ"]	[4, 6]


console.log(solution(["ABACD", "BCEFD"],	["ABCD","AABB"]))

function solution(keymap, targets) {
  const json = {}
  keymap.forEach(ele => {
    ele.split('').forEach((char, index) => {
      json[char] = json[char] < index + 1 ? json[char] : index + 1
    })
  })


  const answer = targets.reduce((acc, ele) => {
    const sum = ele.split('').reduce((acc, char) => {
      acc += json[char]
      return acc
    }, 0)
    acc.push(sum > 0 ? sum : -1)
    return acc
  }, [])

  return answer;
}

const arr = Array(26).fill(0).map((e, index) => String.fromCharCode('A'.charCodeAt() + index))
console.log(arr)

