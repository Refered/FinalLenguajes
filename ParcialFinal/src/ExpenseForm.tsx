import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const ExpenseForm: React.FC = () => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const db = firebase.firestore();

    // Agregar el gasto a la colección en Firebase
    await db.collection("expenses").add({
      expenseName,
      amount: parseFloat(amount), // Convierte la cantidad a número
    });

    // Limpiar el formulario después de enviar
    setExpenseName("");
    setAmount("");
  };

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
      <button type="submit">Agregar Gasto</button>
    </form>
  );
};

export default ExpenseForm;