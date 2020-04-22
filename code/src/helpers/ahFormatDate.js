export const ahFormatDate = (date = '1982-01-01', short = false) => {
  const ahDateArray = ['JAN', '1', '1982']
  const monthsLong = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const monthsShort = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  let errorDetected = false
  const getMonthInText = month => {
    const monthInText = short
      ? monthsShort[parseInt(month) - 1]
      : monthsLong[parseInt(month) - 1]
    return monthInText
  }
  ahDateArray[0] = getMonthInText(date.slice(date.indexOf('-') + 1))
  ahDateArray[1] = date.slice(date.lastIndexOf('-') + 1)
  ahDateArray[2] = date.slice(0, date.indexOf('-'))

  // PERFORM BASIC SAFETY CHECKS
  // check that original date has two dashes
  if ((date.match(/-/g) || []).length !== 2) errorDetected = true

  // check that no part of formatted date is undefined
  ahDateArray.forEach(item => {
    if (typeof item === 'undefined') errorDetected = true
  })

  // check that year has lenght of four charachters
  if (typeof ahDateArray[2] === 'string' && ahDateArray[2].length !== 4) {
    errorDetected = true
  }
  const ahFormatedDateString = ahDateArray.join('-')
  return !errorDetected && ahFormatedDateString
}
