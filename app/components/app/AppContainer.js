import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from './App';
import { fetchUsers } from '../../actions/ukkeliActions';

const mapStateToProps = state => ({
  users: state.users.users,
  error: state.users.error,
  fetching: state.users.fetching,
  fetched: state.users.fetched,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
