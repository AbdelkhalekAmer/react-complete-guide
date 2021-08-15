import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
    const expenses = props.expenses;
    const DEFAULT_FILTER = {
        year: '2019'
    };
    const [filter, setFilter] = useState(DEFAULT_FILTER);
    const onFilterChangeHandler = filter => {
        setFilter(filter);
        console.log(filter);
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter filter={filter} onFilterChange={onFilterChangeHandler} />
                {expenses.map(item => (<ExpenseItem date={item.date} title={item.title} amount={item.amount} />))}
            </Card>
        </div>
    );
};

export default Expenses;