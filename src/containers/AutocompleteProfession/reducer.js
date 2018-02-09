import { SET_ISFETCHING, SET_PROFESSIONS_AUTOCOMPLETE } from './constants';
import { storeName } from './selectors';
import { resolveSetReducer } from 'resolvers/reducers';

const initialState = {
  isFetching: false,
  professionsAutocomplete: []
};

const setIsFetching = resolveSetReducer('isFetching');
const setProfessionsAutocomplete = resolveSetReducer('professionsAutocomplete');

export default {
  [storeName]: function(state = initialState, { type, payload }) {
    switch (type) {
      case SET_ISFETCHING:
        return setIsFetching(state, payload);
      case SET_PROFESSIONS_AUTOCOMPLETE:
        return setProfessionsAutocomplete(state, payload);
      default:
        return state;
    }
  }
};
