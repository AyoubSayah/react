import reducer from './reducer';
import TYPES from './types';
import EN from '../../i18n/en';

const INITIAL_STATE = {
  defaultLanguage: 'EN',
  translation: { ...EN },
};

const LANGUAGE_STATE = {
  types: TYPES,
  initialState: INITIAL_STATE,
  reducer,
};

export default LANGUAGE_STATE;
