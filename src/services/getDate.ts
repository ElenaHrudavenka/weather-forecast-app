import { dateParse } from './dateParse';

export const getDate = (date: string) => {
  const dateArray = dateParse(date);
  const dateStr = dateArray && `${dateArray[3]}.${dateArray[2]}.${dateArray[1]}`;
  return dateStr;
};
