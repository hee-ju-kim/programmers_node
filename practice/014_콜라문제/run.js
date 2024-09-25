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

// 다른사람거

// a를 주고 b를 돌려받는다 했을 때
// 한번 교환했을 때 a - b만큼 없어짐
// 처음이 9병이고 a: 3, b: 1라 하면 결국 3병을 교환하고 1병을 받으니
// a - b를 하면 2병씩 없어지는거니까 n / (a - b) 를 해주면 몇번째에 n이 0이 되는지 알 수 있음
solution2 = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b