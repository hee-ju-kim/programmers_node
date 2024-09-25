// a	b	n	result
// 2	1	20	19
// 3	1	20	9
console.log('result', solution(10, 2, 300))

function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    let submitBottle = parseInt(n / a) * a
    let restBottle = n - submitBottle
    let newDrink = parseInt(submitBottle / a * b)
    n = restBottle + newDrink

    answer += newDrink
  }

  return answer;
}