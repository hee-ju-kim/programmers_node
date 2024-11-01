// park	routes	result
// ["SOO","OOO","OOO"]	["E 2","S 2","W 1"]	[2,1]
// ["SOO","OXX","OOO"]	["E 2","S 2","W 1"]	[0,1]
// ["OSO","OOO","OXO","OOO"]	["E 2","S 3","W 1"]	[0,0]


console.log(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"]))

function solution(park, routes) {
  const N = park.length;
  const M = park[0].length;

  let start = [0, 0]
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      const char = park[i].charAt(j)
      if (char === 'S') {
        start = [i, j]
      }
    } 
  }

  const directions = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  for (const route of routes) {
    const [dir, distanceStr] = route.split(' ');
    let distance = parseInt(distanceStr);
    let [nx, ny] = start;

    let step = 0;
    while (step < distance) {
      nx += directions[dir][0];
      ny += directions[dir][1];

      if (nx < 0 || N <= nx || ny < 0 || M <= ny || park[nx][ny] === 'X') break;
      step++;
    }
    if (step === distance) start = [nx, ny];
  }

  return start;
}
