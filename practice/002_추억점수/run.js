// name	yearning	photo	result
// ["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]	[19, 15, 6]
// ["kali", "mari", "don"]	[11, 1, 55]	[["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]	[67, 0, 55]
// ["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may"],["kein", "deny", "may"], ["kon", "coni"]]	[5, 15, 0]
console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]))

function solution(name, yearning, photo) {
  const tmpObj = name.reduce((acc, ele, index) => {
    acc[ele] = yearning[index]
    return acc
  }, {})
  let sum = photo.reduce((acc, ele) => {
    if (!acc) {
      acc = []
    }
    let sum = ele.reduce((acc, detail) => {
      acc += tmpObj[detail] || 0
      return acc
    }, 0)

    acc.push(sum)
    return acc
  }, [])
  return sum
}
