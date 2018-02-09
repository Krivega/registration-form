import { connect } from 'react-redux';
import { resolveActionHandler } from 'resolvers/actions';
import selector from './selectors';
import Container from './Container';
import { setFirstName, setLastName, setProfession, setPhoneCode, setPhoneNumber } from './actions';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  const resolveChangeHandler = resolveActionHandler(dispatch);

  return {
    onChangeFirstName: resolveChangeHandler(setFirstName),
    onChangeLastName: resolveChangeHandler(setLastName),
    onChangeProfession: resolveChangeHandler(setProfession),
    onChangePhoneCode: resolveChangeHandler(setPhoneCode),
    onChangePhoneNumber: resolveChangeHandler(setPhoneNumber)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
