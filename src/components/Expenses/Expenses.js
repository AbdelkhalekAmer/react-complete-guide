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
    };
    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filter.year);
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter filter={filter} onFilterChange={onFilterChangeHandler} />
                {
                    filteredExpenses.length ?
                        filteredExpenses.map(item => (<ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} />))
                        : (<h2 className='white-font'>No available expenses.</h2>)
                }
            </Card>
        </div>
    );
};

export default Expenses;