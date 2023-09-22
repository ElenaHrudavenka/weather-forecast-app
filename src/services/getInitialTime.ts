export const getInitialTime = () => {
  const currentTime = new Date().toISOString(); //"2023-09-18T14:19:13.658Z"
  const re = /[T][0-9]{2}:[0-9]{2}:[0-9]{2}/gi;
  const initialTime = currentTime.replace(re, 'T12:00:00');

  return initialTime;
};
