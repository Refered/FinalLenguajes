import React, { useState } from "react";

const App = () => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (typeof expenseName !== "string" || expenseName.trim() === "") {
      alert("Por favor, ingrese un nombre de gasto válido.");
      return;
    }

    const amountValue = parseInt(amount, 10);
    if (isNaN(amountValue) || amountValue !== parseInt(amount, 10)) {
      alert("Por favor, ingrese una cantidad válida como número entero.");
      return;
    }

    const newExpense = { expenseName, amount: amountValue };
    setExpenses([...expenses, newExpense]);

    setExpenseName("");
    setAmount("");
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="bg-indigo-500 w-screen h-screen">
      <form className="flex flex-col grow p-5 items-center text-2xl " onSubmit={handleFormSubmit}>
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

        <div className="flex flex-col grow p-5 items-center text-2xl ">
          <h2>Lista de Gastos:</h2>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                {expense.expenseName}: ${expense.amount}
                <button onClick={() => handleDeleteExpense(index)}>Borrar</button>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default App;