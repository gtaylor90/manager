import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
    // makes a new object, sets the email up as the input, and applies to state
    return { ...state, email: action.payload };
    default:
      return state;
  }
};
