const userService = require("../service/user.service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api.error");

async function signUp(req, res, next) {
  try {
    console.log('1',req)
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
      return next(ApiError.BadRequest("Ошибка при валидации", errores.array()));
    }
    const { email, name, password } = req.body;

    const userData = await userService.signUp(email, name, password);
    res.cookie("refreshtoken", userData.refreshToken, {
      maxAge: 2592e6,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
}

async function signIn(req, res, next) {
  try {
    const { email, password } = req.body;
    const userData = await userService.signIn(email, password);
    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 2592e6,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
}

async function signOut(req, res, next) {
  try {
    const { refreshToken } = req.cookies;

    res.clearCookie("refreshToken");

    return res.status(200).end();
  } catch (e) {
    next(e);
  }
}

async function activate(req, res, next) {
  try {
    const activationLink = req.params.link;
    await userService.activate(activationLink);
    return res.redirect(process.env.CLIENT_URL);
  } catch (e) {
    next(e);
  }
}

async function refresh(req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const userData = await userService.refresh(refreshToken);

    res.cookie("refreshToken", userData.refreshToken, {
      maxAge: 2592e6,
      httpOnly: true,
    });
    return res.json(userData);
  } catch (e) {
    next(e);
  }
}

async function getUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    return res.json(users);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  signUp,
  signIn,
  signOut,
  activate,
  refresh,
  getUsers,
};
