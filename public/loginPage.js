"use strict";

const netCoinUserForm = new UserForm();

function callbackAutorize(result) {
  if (result.success === true) {
    location.reload();
  } else {
    netCoinUserForm.setLoginErrorMessage(result.error);
  }
}
//returns: {success: false, error: "Пользователь c логином mari.mts@mail.ru и указанным паролем не найден"}

function callbackRegister(result) {
  if (result.success === true) {
    location.reload();
  } else {
    netCoinUserForm.setRegisterErrorMessage(result.error);
  }
}

function autorize(data) {
  ApiConnector.login(data, callbackAutorize);
}

function register(data) {
  ApiConnector.login(data, callbackRegister);
}

netCoinUserForm.loginFormCallback = autorize;
netCoinUserForm.registerFormCallback = register;
