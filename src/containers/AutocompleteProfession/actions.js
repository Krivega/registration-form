import { SET_ISFETCHING, SET_PROFESSIONS_AUTOCOMPLETE } from './constants';
import { resolvePayloadAction } from 'resolvers/actions';

export const setIsFetching = resolvePayloadAction(SET_ISFETCHING);
export const setProfessionsAutocomplete = resolvePayloadAction(SET_PROFESSIONS_AUTOCOMPLETE);
