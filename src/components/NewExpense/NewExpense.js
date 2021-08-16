import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = props => {
    const [isFormVisible, toggleFormVisibility] = useState(false);
    const onClickHandler = _ => toggleFormVisibility(prevState => !prevState);
    const hideFormHandler = () => toggleFormVisibility(prevState => !prevState);
    return (
        <div className='new-expense'>
            {
                isFormVisible ?
                    <ExpenseForm onSaveExpense={props.onAddExpense} hideForm={hideFormHandler} /> :
                    <button onClick={onClickHandler}>Add New Expense</button>
            }
        </div>
    );
};

export default NewExpense;