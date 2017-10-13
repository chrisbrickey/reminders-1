export const allReminderArray = ({ reminders }) => {
  let reminderIds = Object.keys(reminders);
  return reminderIds.map(id => reminders[id] );
};
