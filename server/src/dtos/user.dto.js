const userDto = (model) => {
  const { id, email, isActivated } = model;
  return { id, email, isActivated };
};

module.exports = userDto;
