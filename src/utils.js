export function  getLastDay(date) {
    if(isMonday(date)) {
      return addDays(date, 6)
    } else if (isTuesday(date)) {
      return addDays(date, 5)
    } else if (isWednesday(date)) {
      return addDays(date, 4)
    } else if (isThursday(date)) {
      return addDays(date, 3)
    } else if (isFriday(date)) {
      return addDays(date, 2)
    } else if (isSaturday(date)) {
      return addDays(date, 1)
    } else if (isSunday(date)) {
      return date
    }
}

export function  getFirstDay(date) {
    if(isMonday(date)) {
      return subWeeks(date, 51);
    } else if (isTuesday(date)) {
      return subWeeks(subDays(date, 1), 51);
    } else if (isWednesday(date)) {
      return subWeeks(subDays(date, 2), 51);
    } else if (isThursday(date)) {
      return subWeeks(subDays(date, 3), 51);
    } else if (isFriday(date)) {
      return subWeeks(subDays(date, 4), 51);
    } else if (isSaturday(date)) {
      return subWeeks(subDays(date, 5), 51);
    } else if (isSunday(date)) {
      return subWeeks(subDays(date, 6), 51);
    }
}

