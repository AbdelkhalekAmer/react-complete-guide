import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    const expenses = props.expenses;
    if (expenses.length) {
        return (
            <ul className='expenses-list'>
                {expenses.map(expense => <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount} />)}
            </ul>
        );
    }
    else {
        return <p className='expenses-list__fallback'>No available expenses.</p>
    }
};

export default ExpensesList;