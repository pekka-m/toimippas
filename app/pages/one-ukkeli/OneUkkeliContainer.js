import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OneUkkeliPage from './OneUkkeliPage';
import { toggleUkkeliTeam } from '../../actions/ukkeliActions';

const getUkkeli = (users, id) => (
  users.find(user => (user.id === id))
);

const mapStateToProps = (state, ownProps) => ({
  user: getUkkeli(state.users.users, ownProps.id),
  title: 'Ukkeli',
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleUkkeliTeam,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OneUkkeliPage);
