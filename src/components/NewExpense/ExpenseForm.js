import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const { onSaveExpenseData } = props;
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [isNewForm, setIsNewForm] = useState(false);
  const [enteredDate, setEnteredDate] = useState(new Date());

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const formViewHandler = () => {
    setIsNewForm(true);
  };

  const formCancelHandler = () => {
    setIsNewForm(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredAmount('');
    setEnteredDate(new Date());
    setEnteredTitle('');
    setIsNewForm(false);
    onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      {isNewForm === true ? (
        <div>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label>Title</label>
              <input
                type='text'
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className='new-expense__control'>
              <label>Amount</label>
              <input
                type='number'
                value={enteredAmount}
                onChange={amountChangeHandler}
                min='0.01'
                step='0.01'
              />
            </div>
            <div className='new-expense__control'>
              <label>Date</label>
              <input
                type='date'
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className='new-expense__actions'>
            <button onClick={formCancelHandler} type='button'>
              Cancel
            </button>
            <button type='submit'>Add Expense</button>
          </div>{' '}
        </div>
      ) : (
        <button onClick={formViewHandler} type='button'>
          Add New Expense
        </button>
      )}
    </form>
  );
};

export default ExpenseForm;
