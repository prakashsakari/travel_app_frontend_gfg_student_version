export const validateNumber = (number) => {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(number);
};
