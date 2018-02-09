export const resolvePayloadAction = type => payload => {
  return {
    type,
    payload
  };
};

export const resolveActionHandler = dispatch => action => value => {
  dispatch(action(value));
};
