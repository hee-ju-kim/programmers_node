// n	lost	reserve	return
// 5,	[2, 4],	[1, 3, 5]	5
// 5,	[2, 4],	[3]	4
// 3,	[3],	[1],	2
// 5, [4,2], [3,5] 5
// 10, [1,2,3,4,5,6], [1,2,3]
// 10, [4, 7], [1, 6, 8] 9
//  5, [4, 5], [3, 4] 4


console.log(solution(5, [4,2], [3,5]))

function solution(n, lost, reserve) {
  const lostJson = lost.reduce((acc, ele) => {
    acc[ele] = true
    return acc
  }, {})

  const common = reserve.reduce((acc, ele) => {
    if (lostJson[ele]) {
      acc[ele] = true
      delete lostJson[ele]
    }
    return acc
  }, {})

  let answer = n - lost.length + Object.keys(common).length

  const loanable = reserve.filter(ele => !lostJson[ele] && !common[ele]).sort((a,b) => a-b)

  console.log('lostJson', lostJson)
  console.log('loanable', loanable)
  if (loanable.length === 0) return answer

  loanable.forEach(ele => {
    if (lostJson[ele - 1]) {
      answer++
      delete lostJson[ele - 1]
    } else if (lostJson[ele + 1] ) {
      answer++
      delete lostJson[ele + 1]
    }
  })
  return answer
}