// https://school.programmers.co.kr/learn/courses/30/lessons/138477?language=javascript

// today	terms	privacies	result
// "2022.05.19"	["A 6", "B 12", "C 3"]	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]	[1, 3]
// "2020.01.01"	["Z 3", "D 5"]	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]	[1, 4, 5]
console.log(solution("2020.01.01",	["Z 3", "D 5"],	["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]))



function solution(today, terms, privacies) {
  const termsJson = terms.reduce((acc, ele) => {
    const strs = ele.split(' ')
    acc[strs[0]] = parseInt(strs[1])
    return acc
  }, {})

  const answer = privacies.reduce((acc, ele, index) => {
    const [date, term] = ele.split(' ')
    const tmpDate = new Date(date)
    const addedDate = tmpDate.setMonth(tmpDate.getMonth() + termsJson[term])
    if (new Date(addedDate) <= new Date(today)) {
      acc.push(index + 1)
    }
    return acc
  }, [])

  return answer;
}