const initState = {
  genre: `All genres`,
};

const ActionType = {
  SELECT_GENRE: `SELECT_GENRE`,
};

const ActionCreator = {
  selectGenre: (selectedGenre) => ({
    type: ActionType.SELECT_GENRE,
    payload: selectedGenre
  }),
};

const reducer = (state = initState, action) => {
  if (action.type === ActionType.SELECT_GENRE) {
    return Object.assign({}, state, {
      genre: action.payload,
    });
  } else {
    return state;
  }
};

export {
  initState,
  ActionType,
  ActionCreator,
  reducer,
};
