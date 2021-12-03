import React, { createContext, useReducer } from 'react';
import LANGUAGE_STATE from './language/index';
import USER_STATE from './user';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [languageState, dispatchChangeLanguage] = useReducer(
    LANGUAGE_STATE.reducer,
    LANGUAGE_STATE.initialState
  );

  const [userState, dispatchUserState] = useReducer(
    USER_STATE.reducer,
    USER_STATE.initialState
  );

  return (
    <AppContext.Provider
      value={{
        languageState,
        userState,

        dispatchChangeLanguage,
        dispatchUserState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
