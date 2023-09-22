import { dateParse } from './dateParse';

export const getTime = (date: string) => {
  const dateArray = dateParse(date);
  const timeString = dateArray && `${dateArray[4]}:${dateArray[5]}`;
  return timeString;
};
