export const FilterDate = (date) => {
  let newDate = "";
  for (let i = 0; i < 4; i++) {
    newDate += date.charAt(i);
  }
  newDate = "-" + newDate;
  let monthNumber = parseInt(date.substring(5, 7));
  switch (monthNumber) {
    case 1:
      newDate = "-Jan" + newDate;
      break;
    case 2:
      newDate = "-Feb" + newDate;
      break;
    case 3:
      newDate = "-Mar" + newDate;
      break;
    case 4:
      newDate = "-Apr" + newDate;
      break;
    case 5:
      newDate = "-May" + newDate;
      break;
    case 6:
      newDate = "-Jun" + newDate;
      break;
    case 7:
      newDate = "-Jul" + newDate;
      break;
    case 8:
      newDate = "-Aug" + newDate;
      break;
    case 9:
      newDate = "-Sep" + newDate;
      break;
    case 10:
      newDate = "-Oct" + newDate;
      break;
    case 11:
      newDate = "-Nov" + newDate;
      break;
    case 12:
      newDate = "-Dec" + newDate;
      break;
    default:
      newDate = "-Jan" + newDate;
      break;
  }
  for (let i = 9; i >= 8; i--) {
    newDate = date.charAt(i) + newDate;
  }
  return newDate;
};
