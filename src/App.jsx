import { useState } from "react";
import Header from "./Header";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Summary from "./Summary";

const initialExpenses = [
    {
        id: 1,
        title: "Internet",
        category: "Education",
        amount: 500
    },
    {
        id: 2,
        title: "Lunch",
        category: "Food",
        amount: 300
    },
    {
        id: 3,
        title: "Book",
        category: "Education",
        amount: 800
    },
    {
        id: 4,
        title: "Transport",
        category: "Transport",
        amount: 250
    },
    {
        id: 5,
        title: "Football",
        category: "Entertainment",
        amount: 400
    },
    {
        id: 6,
        title: "Mobile Credit",
        category: "Communication",
        amount: 200
    }
];

export default function App() {
    const [expenses, setExpenses] = useState(initialExpenses);

    function addExpense(newExpense) {
        setExpenses((expenses) => [
            ...expenses,
            newExpense
        ]);
    }

    function deleteExpense(id) {
        setExpenses((expenses) =>
            expenses.filter(
                (expense) => expense.id !== id
            )
        );
    }

    const total = expenses.reduce(
        (sum, expense) => sum + Number(expense.amount),
        0
    );

    return (
        <div className="app">
            <Header
                total={total}
                count={expenses.length}
            />

            <main className="dashboard">
                <div className="left-column">
                    <ExpenseForm
                        onAddExpense={addExpense}
                    />

                    <ExpenseList
                        expenses={expenses}
                        onDeleteExpense={deleteExpense}
                    />
                </div>

                <Summary
                    expenses={expenses}
                    total={total}
                />
            </main>
        </div>
    );
}