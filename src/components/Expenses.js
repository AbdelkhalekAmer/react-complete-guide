import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    const expenses = props.expenses;
    return (
        <div className='expenses'>
            {expenses.map(item => (<ExpenseItem date={item.date} title={item.title} amount={item.amount} />))}
        </div>
    );
}

export default Expenses;