export const LOGIN_INFORMATION = 'LOGIN_INFORMATION';
export const WALLET_INFORMATION = 'WALLET_INFORMATION';
export const CURRENCY_INFOMRATION = 'CURRENCY_INFOMRATION';

export const userLogin = (email) => ({
  type: LOGIN_INFORMATION,
  payload: email,
});

export const userWallet = (wallet) => ({
  type: WALLET_INFORMATION,
  payload: wallet,
});

export const userCurrency = (currencies) => ({
  type: CURRENCY_INFOMRATION,
  payload: currencies,
});
