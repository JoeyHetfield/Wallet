export const LOGIN_INFORMATION = 'LOGIN_INFORMATION';
export const WALLET_INFORMATION = 'WALLET_INFORMATION';
export const CURRENCY_INFOMRATION = 'CURRENCY_INFOMRATION';
export const DESPESA_SAVE = 'DESPESA_SAVE';
export const DESPESA_DELETE = 'DESPESA_DELETE';

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

export const saveDespesa = (exchanges) => ({
  type: DESPESA_SAVE,
  payload: exchanges,
});

export const deleteDespesa = (exchanges) => ({
  type: DESPESA_DELETE,
  payload: exchanges,
});
