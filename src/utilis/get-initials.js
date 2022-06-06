const getInitials = (name) => {
  const nameArr = name.split(' ');
  return nameArr.map((item) => item[0]).join('');
};

export { getInitials };
