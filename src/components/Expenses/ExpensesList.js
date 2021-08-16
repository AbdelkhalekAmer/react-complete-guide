import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    const expenses = props.expenses;
    if (expenses.length) {
        return expenses.map(item => (
            <ul className='expenses-list'>
                <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} />
            </ul>
        ));
    }
    else {
        return <p className='expenses-list__fallback'>No available expenses.</p>
    }
};

export default ExpensesList;