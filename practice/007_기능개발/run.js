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

// 다른사람 해결법
function solution2 (progresses, speeds) {
  let answer = [0];
  
  // 일단 나는 reduce사용인데 map으로 처리도 가능
  let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

  let maxDay = days[0];

  // maxDay flag확인법
  for(let i = 0, j = 0; i< days.length; i++){
    if(days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}