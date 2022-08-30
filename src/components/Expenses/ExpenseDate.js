import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const { date } = props;
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>
        {date.toLocaleString('en-US', { month: 'long' })}
      </div>
      <div className='expense-date__year'>
        {date.getFullYear()} - {days[date.getDay()]}
      </div>
      <div className='expense-date__day'>{date.getDate()}</div>
    </div>
  );
};

export default ExpenseDate;
