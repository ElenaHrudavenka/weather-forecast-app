//"2023-09-18T14:19:13.658Z"
export const dateParse = (date: string): RegExpExecArray | null => {
  return /([0-9]{4})-([0-9]{2})-([0-9]{2})[T]([0-9]{2}):([0-9]{2}):([0-9]{2}).?([0-9]*Z)/gi.exec(date);
};
