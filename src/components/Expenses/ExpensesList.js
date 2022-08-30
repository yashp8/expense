import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const { data } = props;

  if (data.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return data.map((expense) => {
    return (
      <ul key={expense.id} className='expenses-list'>
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </ul>
    );
  });
};

export default ExpensesList;
