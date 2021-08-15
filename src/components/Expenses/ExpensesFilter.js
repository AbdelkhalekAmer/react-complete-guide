import './ExpensesFilter.css';

const ExpensesFilter = props => {
    const onFilterChange = props.onFilterChange;
    const filter = props.filter;
    const onChangeYearHandler = event => onFilterChange({ ...filter, year: event.target.value });
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={filter.year} onChange={onChangeYearHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;