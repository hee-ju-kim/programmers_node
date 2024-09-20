// progresses	speeds	return
// [93, 30, 55]	[1, 30, 5]	[2, 1]
// [95, 90, 99, 99, 80, 99]	[1, 1, 1, 1, 1, 1]	[1, 3, 2]

console.log(solution( [95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))

function solution (progresses, speeds) {
  const tmp = progresses.reduce((acc, ele, index) => {
    let date = Math.ceil((100 - ele) / speeds[index])
    acc.push(date)
    return acc
  }, [])

  const result = []
  for (let i = 0; i < tmp.length; ) {
    let sum = 1
    for (let j = i + 1; j < tmp.length; j++) {
      if (tmp[i] >= tmp[j]) {
        sum++
      } else {
        break;
      }
    }
    result.push(sum)
    i += sum
  }
  return result
}