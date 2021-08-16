import './Expenses.css';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

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
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;