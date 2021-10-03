export const indexHandler = (data) => {
  return Math.floor(Math.random() * (data.length - 1) + 1);
};
