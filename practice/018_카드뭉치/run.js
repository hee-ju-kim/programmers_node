// cards1	cards2	goal	result
// ["i", "drink", "water"]	["want", "to"]	["i", "want", "to", "drink", "water"]	"Yes"
// ["i", "water", "drink"]	["want", "to"]	["i", "want", "to", "drink", "water"]	"No"

console.log(solution(["i", "drink", "water"],	["want", "to"],	["i", "want", "to", "drink", "water"]))

function solution(cards1, cards2, goal) {
  let answer = 'Yes'
  for (let i = 0; i < goal.length; i++) {
    const word = goal[i]
    const index1 = cards1.indexOf(word)
    const index2 = cards2.indexOf(word)
    if (index1 === 0) {
      cards1.splice(0, 1)
    } else if (index2 === 0) {
      cards2.splice(0, 1)
    } else {
      answer = 'No'
      break
    }
  }
  return answer;
}