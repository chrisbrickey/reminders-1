import { connect } from 'react-redux';
import ReminderList from './reminder_list.jsx';

import { receiveAllReminders,
         receiveSingleReminder } from '../actions/reminder_actions';

import { allReminderArray } from '../reducers/selectors.js';

const mapStateToProps = state => {
  return {
    reminders: allReminderArray(state),
    state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveAllReminders: () => dispatch(receiveAllReminders()),
    receiveSingleReminder: (reminder) => dispatch(receiveSingleReminder(reminder))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReminderList);
