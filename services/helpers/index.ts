export const formatDateFromString = (str : string) => {
  let date = new Date(Date.parse(str))
  return `${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}-${(date.getMonth()+1)>9 ? (date.getMonth()+1): `0${(date.getMonth()+1)}`}-${date.getFullYear()}`
}