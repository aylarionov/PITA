const jwt = require("jsonwebtoken");
const { Token } = require("../db/models");

const generateToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "30m",
  });
  const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "30d",
  });

  return {
    accessToken,
    refreshToken,
  };
};

const validateAccessToken = (token) => {
  try {
    const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    return userData;
  } catch (e) {
    return null;
  }
};

const validateRefreshToken = (token) => {
  try {
    const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    return userData;
  } catch (e) {
    return null;
  }
};

const saveToken = async (UserId, refreshToken) => {
  const tokenDate = await Token.findOne({ where: { UserId } });

  if (tokenDate) {
    tokenDate.refreshToken = refreshToken;
    return await tokenDate.save();
  }
  const token = await Token.create({ UserId, refreshToken });
  return token;
};

const removeToken = async (refreshToken) => {
  const token = await Token.destroy({
    where: { refreshToken },
  });
  return token;
};

const findToken = async (refreshToken) => {
    const token = await Token.findOne({
      where: { refreshToken },
    });
    return token;
  };


module.exports = {
  generateToken,
  saveToken,
  removeToken,
  validateAccessToken,
  validateRefreshToken,
  findToken
};
