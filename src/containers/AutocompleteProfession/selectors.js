import { createSelector } from 'reselect';
import { getStore as getStoreForm } from 'containers/RegistrationForm/selectors';
export const storeName = 'registrationForm';

export const getStore = state => {
  return state[storeName];
};

export default createSelector(getStore, getStoreForm, (store, storeForm) => {
  return {
    ...store,
    profession: storeForm.profession
  };
});
