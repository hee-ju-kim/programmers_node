// lottos	win_nums	result
// [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]	[3, 5]
// [0, 0, 0, 0, 0, 0]	[38, 19, 20, 40, 15, 25]	[1, 6]
// [45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	[1, 1]

console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]))

function solution(lottos, win_nums) {
  let winsJson = win_nums.reduce((acc, ele) => {
    acc[ele] = acc[ele] ? acc[ele] + 1 : 1
    return acc
  }, {})

  let result = lottos.reduce((acc, ele) => {
    if (ele === 0) {
      acc.max++
    } else if (winsJson[ele]){
      acc.min++
      acc.max++
    }
    return acc
  }, { max: 0, min: 0 })
  
  let arr = [result.max, result.min]
  
  let convert = arr.map(ele => {
    switch (ele) {
      case 6:
        return ele = 1
      case 5:
        return ele = 2
      case 4:
        return ele = 3
      case 3:
        return ele = 4
      case 2:
        return ele = 5
      default:
        return ele = 6
    }
  })
  
  return convert
}