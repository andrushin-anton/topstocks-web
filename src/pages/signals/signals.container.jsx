import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsSignalsLoaded } from '../../redux/signal/signal.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.componet';
import SignalsPage from './signals.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsSignalsLoaded(state)
});

const SignalsPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(SignalsPage);

export default SignalsPageContainer;