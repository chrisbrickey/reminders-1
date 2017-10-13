export const RECEIVE_REMINDERS = 'RECEIVE_REMINDERS';
export const RECEIVE_REMINDER = 'RECEIVE_REMINDER';

export const receiveAllReminders = reminders => ({
  type: RECEIVE_REMINDERS,
  reminders
});

export const receiveSingleReminder = reminder => ({
  type: RECEIVE_REMINDER,
  reminder
});
