import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES = [
  {
    id: '1',
    title: "Car Insurance",
    date: new Date('2020-05-25'),
    price: "165.64",
  },
  {
    id: '2',
    title: "Bike Insurance",
    date: new Date('2021-03-25'),
    price: "16.64",
  },
  {
    id: '3',
    title: "House",
    date: new Date('2021-01-25'),
    price: "32.64",
  },
  {
    id: '4',
    title: "Tax",
    date: new Date('2021-08-25'),
    price: "85.64",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
