export const isExistsInDatabase = (arr, id) => {
  return arr.some((item) => item._id === id);
};
