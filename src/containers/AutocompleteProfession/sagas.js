import { SET_PROFESSION, SELECT_PROFESSION } from 'containers/RegistrationForm/constants';
import { put, takeLatest } from 'redux-saga/effects';
import { setProfessionsAutocomplete, setIsFetching } from './actions';

import allProfessions from './professions.json';

const resolveIncludeString = query => string => string.toLowerCase().includes(query.toLowerCase());

const getEntries = (entries = [], { filter = '', limit = 5 } = {}) => {
  const result = [];
  const hasIncludeFilter = resolveIncludeString(filter);

  for (let i = 0, size = entries.length; i < size; i++) {
    let entry = entries[i];

    if (hasIncludeFilter(entry.name)) {
      result.push(entry);
      if (result.length >= limit) {
        break;
      }
    }
  }

  return result;
};

const searchProfession = filter => {
  return new Promise(resolve => {
    const professions = getEntries(allProfessions, { filter });

    setTimeout(() => resolve(professions), 700); // simulate request
  });
};

function* searchProfessions({ payload }) {
  try {
    let professions;

    if (payload) {
      yield put(setIsFetching(true));
      professions = yield searchProfession(payload);
    } else {
      professions = [];
    }

    yield put(setProfessionsAutocomplete(professions));
    yield put(setIsFetching(false));
  } catch (e) {}
}

function* selectProfession() {
  try {
    yield put(setProfessionsAutocomplete([]));
  } catch (e) {}
}

export function* handleSetProfession() {
  yield takeLatest(SET_PROFESSION, searchProfessions);
}

export function* handleSelectProfession() {
  yield takeLatest(SELECT_PROFESSION, selectProfession);
}
