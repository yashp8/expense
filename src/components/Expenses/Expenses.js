import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart
          expenses={expenses.filter(
            (expense) =>
              new Date(expense.date).getFullYear() === filteredYear * 1,
          )}
        />
        <ExpensesList
          data={expenses.filter(
            (expense) =>
              new Date(expense.date).getFullYear() === filteredYear * 1,
          )}
        />
      </Card>
    </div>
  );
};

export default Expenses;
