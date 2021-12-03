import EN from '../../i18n/en.json';
import FR from '../../i18n/fr.json';
import PR from '../../i18n/pr.json';

import TYPES from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.CHANGE_LANGUAGE:
      return {
        ...state,
        defaultLanguage: action.language,
        translation:
          action.language === 'FR'
            ? { ...FR }
            : action.language === 'PR'
            ? { ...PR }
            : { ...EN },
      };
    case TYPES.RESET_DEFAULT_LANGUAGE:
      return {
        ...state,
        defaultLanguage: action.defaultLanguage,
        translation:
          action.defaultLanguage === 'FR'
            ? { ...FR }
            : action.defaultLanguage === 'PR'
            ? { ...PR }
            : { ...EN },
      };
    default:
      return state;
  }
};

export default reducer;
