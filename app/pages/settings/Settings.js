import React, { PropTypes } from 'react';

const Settings = props => (
  <div>
    <h2>Settings</h2>
    <button
      className="btn btn-danger"
      onClick={() => props.fetchUsers()}
    >Reload ukkelis
    </button>
  </div>
);

Settings.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
};

export default Settings;
