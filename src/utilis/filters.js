export const getFilterByCategoryItem = (arr, condition) => {
  if (condition === "All") return arr;
  return arr.filter((item) => item.category === condition);
};
