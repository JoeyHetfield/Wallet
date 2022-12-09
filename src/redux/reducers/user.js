import { LOGIN_INFORMATION } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_INFORMATION:
    return { ...state, email: action.payload };
  default: return state;
  }
};

export default user;
