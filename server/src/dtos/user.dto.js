const userDto = (model) => {
  const { id, email, isActivated, role } = model;
  if (role) {
    console.log(model);
    return { id, email, isActivated, role };
  }
  return { id, email, isActivated };
};

module.exports = userDto;
