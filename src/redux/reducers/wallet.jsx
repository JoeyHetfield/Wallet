import
{ WALLET_INFORMATION, CURRENCY_INFOMRATION, DESPESA_SAVE, DESPESA_DELETE }
  from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_INFORMATION:
    return { ...state, wallet: action.payload };
  case CURRENCY_INFOMRATION:
    return { ...state, currencies: action.payload };
  case DESPESA_SAVE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DESPESA_DELETE:
    return { ...state, expenses: action.payload };
  default: return state;
  }
};

export default wallet;
