const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

const initialState = {
  count: 0
};

const increment = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      const {count} = state;
      return {
        count: count + 1
      };
    default:
      return state;
  }
}

export default increment
