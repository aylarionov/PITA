const { User, Sequelize } = require("../db/models");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail.service");
const tokenService = require("./token.service");
const usersDto = require("../dtos/user.dto");
const ApiError = require("../exceptions/api.error");

const signUp = async (email, name, password) => {
  const candidat = await User.findOne({ where: { email } });

  if (candidat) {
    throw ApiError.BadRequest(
      `Пользователь с почтовым адресом ${email} уже существует`
    );
  }

  const hashPassword = await bcrypt.hash(password, 3);
  const activationLink = uuid.v4();

  const user = await User.create({
    email,
    name,
    password: hashPassword,
    isActivated: false,
    activationLink,
  });

  //   await mailService.sendActivationMail(
  //     email,
  //     `${process.env.API_URL}/api/activate/${activationLink}`
  //   );

  return helperUT(user);
};

const activate = async (activationLink) => {
  const user = await User.findOne({ where: { activationLink } });
  if (!user) {
    throw ApiError.BadRequest("Неккоректная ссылка активации");
  }

  user.isActivated = true;
  await user.save();
};

const signIn = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw ApiError.BadRequest("Пользователь с таким email не найден");
  }

  const isPassEquals = await bcrypt.compare(password, user.password);
  if (!isPassEquals) {
    throw ApiError.BadRequest("Неверный пароль");
  }

  return helperUT(user);
};

const signOut = async (refreshToken) => {
  const token = await tokenService.removeToken(refreshToken);
  return token;
};

const refresh = async (refreshToken) => {
  if (!refreshToken) {
    throw ApiError.UnauthorizedError();
  }

  const userData = tokenService.validateRefreshToken(refreshToken);
  const tokenfromDB = tokenService.findToken(refreshToken);

  if (!userData || !tokenfromDB) {
    throw ApiError.UnauthorizedError();
  }

  const user = await User.findOne({ where: { id: userData.id } });
  return helperUT(user);
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

async function helperUT(user) {
  const userDto = usersDto(user);
  const tokens = tokenService.generateToken({ ...userDto });

  await tokenService.saveToken(userDto.id, tokens.refreshToken);
  return { ...tokens, user: userDto };
}

module.exports = {
  signUp,
  activate,
  signIn,
  signOut,
  refresh,
  getAllUsers,
};
