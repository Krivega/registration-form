import {
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_PROFESSION,
  SELECT_PROFESSION,
  SET_PHONECODE,
  SET_PHONENUMBER
} from './constants';
import { resolvePayloadAction } from 'resolvers/actions';

export const setFirstName = resolvePayloadAction(SET_FIRSTNAME);
export const setLastName = resolvePayloadAction(SET_LASTNAME);
export const setProfession = resolvePayloadAction(SET_PROFESSION);
export const selectProfession = resolvePayloadAction(SELECT_PROFESSION);
export const setPhoneCode = resolvePayloadAction(SET_PHONECODE);
export const setPhoneNumber = resolvePayloadAction(SET_PHONENUMBER);
