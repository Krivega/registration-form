import { all } from 'redux-saga/effects';
import {
  handleSetProfession,
  handleSelectProfession
} from 'containers/AutocompleteProfession/sagas';

export default function* sagas() {
  yield all([handleSetProfession(), handleSelectProfession()]);
}
