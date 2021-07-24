import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Quest Bars",
    amount: 34.62,
    date: new Date(2021, 3, 3),
  },
  {
    id: "e2",
    title: "Quest Bars",
    amount: 34.62,
    date: new Date(2021, 4, 3),
  },
  {
    id: "e3",
    title: "Quest Bars",
    amount: 34.62,
    date: new Date(2021, 5, 3),
  },
  {
    id: "e4",
    title: "Quest Bars",
    amount: 34.62,
    date: new Date(2021, 6, 3),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
