import { connect } from 'react-redux';
import { resolveActionHandler } from 'resolvers/actions';
import selector from './selectors';
import Container from './Container';
import { selectProfession } from 'containers/RegistrationForm/actions';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  const resolveChangeHandler = resolveActionHandler(dispatch);

  return {
    onSelectProfession: resolveChangeHandler(selectProfession)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
