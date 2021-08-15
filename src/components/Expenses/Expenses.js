import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
    const expenses = props.expenses;
    return (
        <Card className='expenses'>
            {expenses.map(item => (<ExpenseItem date={item.date} title={item.title} amount={item.amount} />))}
        </Card>
    );
};

export default Expenses;