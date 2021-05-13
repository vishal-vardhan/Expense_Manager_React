import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const elements = props.expenses
    .map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
    ));

  const expensesElement =
    elements.length === 0 ? (
      <h2 className='expenses-list__fallback'>Found no expenses</h2>
    ) : (
      elements
    );

  return <ul className="expenses-list">{expensesElement}</ul>;
};

export default ExpensesList;
