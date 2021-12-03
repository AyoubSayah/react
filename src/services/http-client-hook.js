import { useContext } from 'react';
import { AppContext } from 'store/app.context';
import axios from 'axios';
import { API_BASE_URL } from 'config/core';
import { isAuthorized } from 'utils';
import LOADER_STATE from 'store/loader';
import { toast } from 'react-toastify';

const useHttpClient = () => {
  const { languageState, loaderState, dispatchLoaderState } =
    useContext(AppContext);

  const httpClient = axios.create({
    baseURL: `${API_BASE_URL}`,
    timeout: 60000,
  });

  httpClient.interceptors.request.use(
    (config) => {
      const method = config.method.toLowerCase();
      if (method !== 'get') {
        dispatchLoaderState({
          type: LOADER_STATE.types.SHOW_LOADER,
        });
      }
      if (
        localStorage.getItem('user') &&
        localStorage.getItem('token') &&
        isAuthorized()
      ) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = `Bearer ${token}`;
      } else {
        // delete config.headers.Authorization;
      }
      const language = languageState.defaultLanguage;
      if (language) {
        config.headers['Accept-Language'] = language;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  httpClient.interceptors.response.use(
    (config) => {
      dispatchLoaderState({
        type: LOADER_STATE.types.HIDE_LOADER,
      });

      return config;
    },
    (error) => {
      dispatchLoaderState({
        type: LOADER_STATE.types.HIDE_LOADER,
      });
      toast.error(
        error.response.data.message ||
          languageState.translation.COMMON.ERRORS.ERROR,
        {
          position: 'bottom-right',
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      return Promise.reject(error);
    }
  );

  return { httpClient };
};

export default useHttpClient;
