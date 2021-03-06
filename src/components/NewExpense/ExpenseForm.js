import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = props => {
    const TODAY = new Date();
    const CURRENT_DATE = `${TODAY.getFullYear()}-${`0${TODAY.getMonth() + 1}`.slice(-2)}-${`0${TODAY.getDate()}`.slice(-2)}`;
    const DEFAULT_EXPENSE = {
        title: '',
        amount: 0.01,
        date: CURRENT_DATE
    };
    const onSaveExpense = props.onSaveExpense;
    const hideForm = props.hideForm;
    const [expense, setExpense] = useState(DEFAULT_EXPENSE);
    const titleChangeHandler = event => setExpense(prevState => { return { ...prevState, title: event.target.value }; });
    const amountChangeHandler = event => setExpense(prevState => { return { ...prevState, amount: event.target.value }; });
    const dateChangeHandler = event => setExpense(prevState => { return { ...prevState, date: event.target.value }; });
    const submitHandler = event => {
        event.preventDefault();
        onSaveExpense(expense);
        setExpense(DEFAULT_EXPENSE);
        resetForm();
    };
    const resetHandler = event => {
        event.preventDefault();
        resetForm();
    };
    const resetForm = () => {
        setExpense(DEFAULT_EXPENSE);
        hideForm();
    };
    return (
        <form onSubmit={submitHandler} onReset={resetHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={expense.title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={expense.amount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={expense.date} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='reset'>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;