import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UkkelitPage from './UkkelitPage';
import { createUkkeli } from '../../actions/ukkeliActions';

const mapStateToProps = state => ({
  users: state.users.users,
  title: 'Ukkelit',
});

const mapDispatchToProps = dispatch => bindActionCreators({
  createUkkeli,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UkkelitPage);
