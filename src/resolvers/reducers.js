export const resolveSetReducer = name => (state, value) => {
  if (state[name] === value) {
    return state;
  }

  return Object.assign({}, state, {
    [name]: value
  });
};
