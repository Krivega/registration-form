import { createSelector } from 'reselect';
export const storeName = 'AutocompleteProfession';

export const getStore = state => {
  return state[storeName];
};

export default createSelector(getStore, store => {
  return store;
});
