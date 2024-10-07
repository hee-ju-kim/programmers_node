// X	Y	result
// "100"	"2345"	"-1"
// "100"	"203045"	"0"
// "100"	"123450"	"10"
// "12321"	"42531"	"321"
// "5525"	"1255"	"552"


console.log(solution3("100", "203045"))

function solution(X, Y) {
  let small, chk
  if(X.length > Y.length) {
    small = [...X]
    chk = [...Y].reduce((acc, ele) => {
      acc[ele] = acc[ele] ? ++acc[ele] : 1
      return acc
    }, {})
  } else {
    small = [...Y]
    chk = [...X].reduce((acc, ele) => {
      acc[ele] = acc[ele] ? ++acc[ele] : 1
      return acc
    }, {})
  }

  const tmp = small.reduce((acc, ele) => {
    if (chk[ele]) {
      acc.push(ele)
      --chk[ele]
    }
    return acc
  }, [])

  if (tmp.length === 0) {
    return '-1'
  }
  const tmp2 = tmp.sort((a, b) => b - a).join('')
  if (tmp2.charAt(0) === '0') {
    return '0'
  } else {
    return tmp2.toString()
  }
}

// 다른사람거
function solution2(x, y){
  let answer = "";
  const xHash = new Map();
  const yHash = new Map();

  x.split("").forEach(i=> xHash.set(i, xHash.has(i) ?  xHash.get(i)  +1 : 1));
  y.split("").forEach(i=> yHash.set(i, yHash.has(i) ? yHash.get(i) +1 : 1));

  for(let i = 9; i >= 0; i --){
    const index = i.toString();
    if(!xHash.has(index)) continue;
    if(!yHash.has(index)) continue;

    const num = Math.min(xHash.get(index), yHash.get(index))
    answer += index.repeat(num)
  }
  if(answer.length === 0) return "-1"
  if(answer[0] === "0" ) return "0";
  return answer;
}

// 다른사람거2
function solution3(X, Y) {
  let num1 = new Array(10).fill(0)
  let num2 = new Array(10).fill(0)
  let answer = ""
  for(let i = 0; i < X.length; ++i){
      num1[X[i]] += 1
  }
  for(let i = 0; i < Y.length; ++i){
      num2[Y[i]] += 1
  }
  for(let i = 9; i >=0; --i){
      if(num1[i]>0 && num2[i]>0){
          answer += (i+"").repeat(Math.min(num1[i], num2[i]))
      }
  }
  if(answer == "") return "-1"
  if(answer.split("").every(v=>v==0)) return "0"
  return answer
}