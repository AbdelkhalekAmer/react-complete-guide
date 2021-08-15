import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      date: new Date(2021, 7, 15),
      title: 'A',
      amount: 240
    },
    {
      date: new Date(2021, 7, 15),
      title: 'B',
      amount: 122.5
    }
    , {
      date: new Date(2021, 7, 15),
      title: 'C',
      amount: 75
    }
  ]
  return (
    <div>
      {expenses.map(item => (<ExpenseItem date={item.date} title={item.title} amount={item.amount}></ExpenseItem>))}
    </div>
  );
}

export default App;
