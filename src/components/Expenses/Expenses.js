import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import Chart from '../Chart/Chart';
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  let dataPoints = [
    {value: 0, label: 'Jan'},
    {value: 0, label: 'Feb'},
    {value: 0, label: 'Mar'},
    {value: 0, label: 'Apr'},
    {value: 0, label: 'May'},
    {value: 0, label: 'Jun'},
    {value: 0, label: 'Jul'},
    {value: 0, label: 'Aug'},
    {value: 0, label: 'Sep'},
    {value: 0, label: 'Oct'},
    {value: 0, label: 'Nov'},
    {value: 0, label: 'Dec'},
  ];

  const onFilterChange = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  let maxValue = 0;
  for(const x of filteredExpenses) {
    maxValue = Math.max(maxValue, x.price);
    const index = x.date.getMonth();  // Jan === 0
    dataPoints[index].value += Number(x.price);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={onFilterChange} selected={selectedYear} />
      <Chart maxValue={maxValue} dataPoints={dataPoints} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
