import { LOGIN_INFORMATION } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_INFORMATION:
    return { ...state, email: action.payload.email };
  default: return state;
  }
};

export default userReducer;
