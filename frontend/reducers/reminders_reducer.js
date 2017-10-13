const initialState = {
  1: {
    id: 1,
    title: 'book flight',
    body: 'book flight on United, check points',
    complete: false
  },
  2: {
    id: 2,
    title: 'determine location for snorkeling',
    body: 'decide after collecting data on a few locations',
    complete: true
  },
};

const remindersReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {

    default:
      return state;
  }
};

export default remindersReducer;
