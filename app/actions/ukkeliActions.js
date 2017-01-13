// import axios from 'axios';

export const fetchUsers = () => (
  (dispatch) => {
    dispatch({
      type: 'FETCH_USERS_PENDING',
    });
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((responseJson) => {
        dispatch({
          type: 'FETCH_USERS_FULFILLED',
          payload: responseJson,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_USERS_REJECTED',
          payload: error,
        });
      });
  }
);

export const createUkkeli = (name, email) => (
  (dispatch) => {
    dispatch({
      type: 'CREATE_UKKELI',
      payload: {
        name,
        email,
      },
    });
  }
);

export const toggleUkkeliTeam = id => (
  (dispatch) => {
    dispatch({
      type: 'TOGGLE_UKKELI_TEAM',
      payload: {
        id,
      },
    });
  }
);
