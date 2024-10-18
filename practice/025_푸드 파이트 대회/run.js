// food	result
// [1, 3, 4, 6]	"1223330333221"
// [1, 7, 1, 2]	"111303111"

console.log(solution( [1, 7, 1, 2]))
function solution(food) {
  const tmp = food.reduce((acc, ele, index) => {
    const half = parseInt(ele / 2)
    if (index > 0) {
      acc.push(index.toString().repeat(half))
    } 
    return acc
  }, [])
  return tmp.join('') + '0' + tmp.reverse().join('')
}