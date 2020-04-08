const data = [{
  principal: 2500,
  time: 1.8
}, {
  principal: 1000,
  time: 5
}, {
  principal: 3000,
  time: 1
}, {
  principal: 2000,
  time: 3
}]

function interestCalculator(input = data) {
  const interestData = []
  let rate
  for (const { principal, time } of input) {
    if (principal >= 2500 && time > 1 && time < 3 ) rate = 3
    else if (principal >= 2500 && time >= 3 ) rate = 4
    else if (principal < 2500 && time <= 1 ) rate = 2
    else rate = 1
    interestData.push({
      principal,
      rate,
      time,
      interest: (principal * time * rate) / 1e2
    })
  }
  console.log(interestData)
  return interestData
}

interestCalculator(data)



