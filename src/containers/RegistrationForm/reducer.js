import {
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_PROFESSION,
  SELECT_PROFESSION,
  SET_PHONECODE,
  SET_PHONENUMBER
} from './constants';
import { storeName } from './selectors';
import { resolveSetReducer } from 'resolvers/reducers';

const initialState = {
  firstName: '',
  lastName: '',
  profession: '',
  phoneCode: '+7',
  phoneNumber: ''
};

const setFirstName = resolveSetReducer('firstName');
const setLastName = resolveSetReducer('lastName');
const setProfession = resolveSetReducer('profession');
const selectProfession = resolveSetReducer('profession');
const setPhoneCode = resolveSetReducer('phoneCode');
const setPhoneNumber = resolveSetReducer('phoneNumber');

export default {
  [storeName]: function(state = initialState, { type, payload }) {
    switch (type) {
      case SET_FIRSTNAME:
        return setFirstName(state, payload);
      case SET_LASTNAME:
        return setLastName(state, payload);
      case SET_PROFESSION:
        return setProfession(state, payload);
      case SELECT_PROFESSION:
        return selectProfession(state, payload);
      case SET_PHONECODE:
        return setPhoneCode(state, payload);
      case SET_PHONENUMBER:
        return setPhoneNumber(state, payload);
      default:
        return state;
    }
  }
};
