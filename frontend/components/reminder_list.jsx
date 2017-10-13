import React from 'react';

class ReminderList extends React.Component {

  render() {
    console.log(this.props);
    const { reminders } = this.props; //the array of reminders
    console.log(reminders);

    const reminderItems = reminders.map(reminder => (
      <li>{ reminder.title }</li>
    ) //end of body; doesn't include parameter
  ); //end of anonymous function

    return(
      <div className="reminderList">
        <h6>from the reminder_list presentational component</h6>
        <ul> { reminderItems } </ul>
      </div>
    ); //end of contents being returned

  } //end of render function


} //end of class


export default ReminderList;
