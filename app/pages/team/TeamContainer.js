import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TeamPage from './TeamPage';
import { toggleUkkeliTeam } from '../../actions/ukkeliActions';

const getTeamUkkelit = users => (
  users.filter(user => (user.team))
);

const mapStateToProps = state => ({
  users: getTeamUkkelit(state.users.users),
  title: 'Team',
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleUkkeliTeam,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
