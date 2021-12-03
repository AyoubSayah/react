import { useContext } from 'react';
import { AppContext } from 'store/app.context';
import USER_STATE from 'store/user';
import useHttpClient from '../http-client-hook';

// export const signup = async (payload) =>
//   httpClient.post(`/auth/local/signup`, payload);

// export const signin = async (payload) =>
//   httpClient.post(`/auth/local/signin`, payload);

const useAuthService = () => {
  const { httpClient } = useHttpClient();
  const { dispatchUserState } = useContext(AppContext);

  const autoLogin = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const token = localStorage.getItem('token');
    dispatchUserState({
      type: USER_STATE.types.SET_USER_INFO,
      userInfo,
      token,
    });
  };

  const signup = async (payload) =>
    httpClient.post(`/auth/local/signup`, payload);

  const signin = async (payload) =>
    httpClient.post(`/auth/local/signin`, payload);

  const forgotPassword = async (email) =>
    httpClient.post(`/auth/reset-password`, { email });

  const updatePassword = async (password, token) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return httpClient.put(
      `/auth/new-password`,
      { password },
      {
        headers,
      }
    );
  };

  return {
    signup,
    signin,
    forgotPassword,
    updatePassword,
    autoLogin,
  };
};

export default useAuthService;
