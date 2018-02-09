import { combineReducers } from 'redux';
import registrationFormReducer from 'containers/RegistrationForm/reducer';
import autocompleteProfessionReducer from 'containers/AutocompleteProfession/reducer';

export default combineReducers({
  ...registrationFormReducer,
  ...autocompleteProfessionReducer
});
