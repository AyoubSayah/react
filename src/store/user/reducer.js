import TYPES from './types';

const saveUserInfo = (userInfo, token) => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  localStorage.setItem('token', token);
};

const clearUserInfo = () => {
  localStorage.clear();
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_USER_INFO:
      saveUserInfo(action.userInfo, action.token);
      return {
        ...state,
        userInfo: action.userInfo,
        token: action.token,
      };
    case TYPES.RESET_USER_INFO:
      clearUserInfo();
      return {
        ...state,
        userInfo: null,
        token: '',
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
