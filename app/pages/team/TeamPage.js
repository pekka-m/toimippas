import React, { PropTypes } from 'react';
import Ukkelit from '../../components/Ukkelit';

const TeamPage = (props) => {
  const { users, title, toggleUkkeliTeam } = props;
  return (
    <div>
      <h2>{title}</h2>
      <Ukkelit users={users} onUkkeliClick={id => toggleUkkeliTeam(id)} />
    </div>
  );
};

TeamPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.bool.isRequired,
  })),
  title: PropTypes.string.isRequired,
  toggleUkkeliTeam: PropTypes.func.isRequired,
};

TeamPage.defaultProps = {
  users: [],
};

export default TeamPage;
