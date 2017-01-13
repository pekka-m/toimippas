import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Settings from './Settings';
import { fetchUsers } from '../../actions/ukkeliActions';

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
}, dispatch);

export default connect(null, mapDispatchToProps)(Settings);
