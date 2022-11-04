export const validateName = (name) => {
  const regex = /^[a-z]+$/i;
  return regex.test(name);
};
