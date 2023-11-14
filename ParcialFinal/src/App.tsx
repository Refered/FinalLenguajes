import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add the new expense to the local storage
    const newExpense = {
      expenseName,
      amount: parseFloat(amount),
    };

    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);

    // Save expenses to local storage
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));

    // Clear form inputs
    setExpenseName("");
    setAmount("");
  };

  useEffect(() => {
    // Retrieve expenses from local storage on component mount
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Nombre del gasto:
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Cantidad:
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <br />
      <button className="" type="submit">
        Agregar Gasto
      </button>

      {/* Display expenses */}
      <div>
        <h2>Lista de Gastos:</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.expenseName}: ${expense.amount}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default App;