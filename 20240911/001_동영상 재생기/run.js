// video_len	pos	op_start	op_end	commands	result
// "34:33",	"13:00", "00:55",	"02:55", ["next", "prev"]	"13:00"
// "10:55",	"00:05", "00:15",	"06:55", ["prev", "next", "next"]	"06:55"
// "07:22",	"04:05", "00:15",	"04:07", ["next"]	"04:17"
// "30:00", "00:08", "00:00", "00:05", ["prev"], "00:05"
console.log('헤헤')
console.log(solution("30:00", "00:08", "00:00", "00:05", ["prev"]))

function solution(video_len, pos, op_start, op_end, commands) {
  const tmpTotalLen = timeConvertor(video_len)
  const tmpPos = timeConvertor(pos)
  const tmpOpS = timeConvertor(op_start)
  const tmpOpE = timeConvertor(op_end)

  let current = openingJump(tmpPos, tmpOpS, tmpOpE)
  commands.forEach((command) => {
    if (command === 'next') {
      current += 10
      if (tmpTotalLen - current < 10) {
        current = tmpTotalLen
      }
    } else {
      current -= 10
      if (current < 10) {
        current = 0
      }
    }
    current = openingJump(current, tmpOpS, tmpOpE)
  })
 
  const min = parseInt(current / 60)
  const sec = current % 60
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
}

function timeConvertor(time) {
  const [min, sec] = time.split(':')
  return parseInt(min) * 60 + parseInt(sec)
}

function openingJump(current, tmpOpS, tmpOpE) {
  if (current >= tmpOpS && current <= tmpOpE) {
    current = tmpOpE
  }
  return current
}