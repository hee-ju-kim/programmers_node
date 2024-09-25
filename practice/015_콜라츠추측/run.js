// n	result
// 6	8
// 16	4
// 626331	-1
// console.log(solution(626331))

function solution(num) {
  var answer = 0;
  if (num === 1) return answer

  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2
    } else {
      num = (num * 3) + 1
    }
    answer++
    if (answer > 499) {
      answer = -1
      break;
    }
  }
  return answer;
}

// 재귀함수 사용한 버전
function recursive(num, cnt) {
  if (num === 1) {
    return cnt
  }

  if (cnt === 500) {
    return -1
  }
  
  return recursive(num % 2 === 0 ? num / 2 : (num * 3) + 1, ++cnt)
}

console.log(recursive(626331, 0))

// 다른사람거
function collatz(num, count = 0) {
  return (num == 1) ? ((count >= 500) ? -1 : count) : collatz((num % 2 == 0) ? num / 2 : (num * 3) + 1, ++count);
}