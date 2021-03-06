const usersInitialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};

const users = (state = usersInitialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_PENDING':
      return { ...state, fetching: true, fetched: false, error: null };
    case 'FETCH_USERS_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload.map(user => (
          { ...user, team: false }
        )),
        error: null,
      };
    case 'FETCH_USERS_REJECTED':
      return { ...state, fetching: false, error: action.payload.name };
    case 'CREATE_UKKELI': {
      const { id, name, email } = action.payload;
      return { ...state, users: state.users.concat({ id, name, email, team: false }) };
    }
    case 'TOGGLE_UKKELI_TEAM':
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return { ...user, team: !user.team };
          }
          return { ...user };
        }),
      };
    case 'persist/REHYDRATE':
      console.log('reducer persist', action.payload);
      if (action.payload.users && action.payload.users.users.length > 0) {
        return {
          ...state,
          fetching: false,
          fetched: true,
          users: action.payload.users.users,
          error: null,
        };
      }
      return { ...state, error: 'ei kalevi ei ollu mitään' };
    default:
      return state;
  }
};

export default users;
