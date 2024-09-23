// hp	result
// 23	5
// 24	6
// 999	201

// 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1

console.log(solution2(999))

function solution(hp) {
  let general = parseInt(hp / 5)
  let soldier = parseInt((hp % 5) / 3)
  let worker = parseInt((hp % 5) % 3)

  return general + soldier + worker
}

// 다른 사람 풀이 parseInt대신 Math.floor()를 사용 
// Math.floor() == ~~
function solution2(hp) {
  return ~~(hp / 5) + ~~((hp % 5) / 3) + (hp % 5) % 3
}
