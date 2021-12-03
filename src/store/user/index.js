import TYPES from './types';
import reducer from './reducer';

const INITIAL_STATE = {
  userInfo: null,
  token: '',
};

const USER_STATE = {
  types: TYPES,
  initialState: INITIAL_STATE,
  reducer,
};

export default USER_STATE;
