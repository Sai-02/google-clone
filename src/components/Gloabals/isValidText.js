export const isValidText = (text) => {
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  return !format.test(text);
};
