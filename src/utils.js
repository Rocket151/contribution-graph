import { addDays, isFriday, isMonday, isSaturday, isSunday, isThursday, isTuesday, isWednesday, subDays, subWeeks } from "date-fns"

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
      return subWeeks(subDays(date, 1), 50);
    } else if (isWednesday(date)) {
      return subWeeks(subDays(date, 2), 50);
    } else if (isThursday(date)) {
      return subWeeks(subDays(date, 3), 50);
    } else if (isFriday(date)) {
      return subWeeks(subDays(date, 4), 50);
    } else if (isSaturday(date)) {
      return subWeeks(subDays(date, 5), 50);
    } else if (isSunday(date)) {
      return subWeeks(subDays(date, 6), 50);
    }
}

export function getMonths(arr) {
  const months = [];
  for(let num of arr) {
    months.push(Months[num]);
  }
  return months
}
