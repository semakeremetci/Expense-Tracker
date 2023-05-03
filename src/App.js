// !!! Quit development server = ctrl+c

import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// Hazırda var olan harcama bilgisi
const DummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// Ana fonksiyon
function App() {
  // "expenses" adlı değişkene "DummyExpenses"teki verileri ata, useState fonk. oluştur.
  const [expenses, setExpenses] = useState(DummyExpenses);

  // "onAddExpense" her çalıştığında "addExpenseHandler" fonk. çalışsın. "expense" adlı parametre eklenmiş.

  /* useState ile oluşturulan fonk.(setExpenses) Önceki değerleri(DummyExpenses) alır ve
  üstüne oluşturulan parametre(expense) gelir. */
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  console.log(expenses);

  return (
    <div>
      {/* "NewExpense" komponentinden gelen parametre "expense" parametresini karşilar. */}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
