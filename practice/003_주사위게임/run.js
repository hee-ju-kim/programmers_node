// a	b	c	result
// 2	6	1	9
// 5	3	3	473
// 4	4	4	110592
console.log(solution(5,3,3))

function solution(a, b, c) {
  const size = new Set([a, b, c]).size
  let result
  switch (size) {
    case 1:
      result = calc(a, b, c, 3)
      break;
    case 2:
      result = calc(a, b, c, 2)
      break;
    case 3:
      result = calc(a, b, c, 1)
      break;
  }

  return result
}

function calc(a, b, c, index) {
  console.log(a, b, c, index)
  let result = 1
  for (let i = 1; i <= index; i++) {
    result *= ((a ** i) + (b ** i) + (c ** i))
    console.log(result)
  }
  return result
}