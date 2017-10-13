import { RECEIVE_REMINDERS,
         RECEIVE_REMINDER } from '../actions/reminder_actions';
import merge from 'lodash/merge';

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
    case RECEIVE_REMINDERS:
      nextState = {};
      action.reminders.forEach((reminder) => {
        nextState[reminder.id] = reminder;
      });
      return nextState;

    case RECEIVE_REMINDER:
      const newReminder = {[action.reminder.id]: action.reminder};
      return merge({}, state, newReminder);

    default:
      return state;
  }
};

export default remindersReducer;
