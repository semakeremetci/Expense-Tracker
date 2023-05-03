import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [expenseForm, setExpenseForm] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // submit edildiğinde "expenseData" ya verileri atar ve gönderir, her şeyi default haline döndürür.
  const submitHandler = (event) => {
    // prevent.Default submit işleminde sayfanın yenilemmesini önlemek için kullanılır.
    event.preventDefault();
    showExpenseForm(false);

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const showExpenseForm = () => {
    expenseForm ? setExpenseForm(false) : setExpenseForm(true);
  };

  const expenseFormData = (
    <div>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.1"
            step="0.1"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2022-01-01"
            max="2023-08-01"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={showExpenseForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </div>
  );

  const addExpenseButton = (
    <button type="button" onClick={showExpenseForm}>
      Add Expense
    </button>
  );

  return (
    <form onSubmit={submitHandler}>
      {expenseForm ? expenseFormData : addExpenseButton}
    </form>
  );
};

export default ExpenseForm;
