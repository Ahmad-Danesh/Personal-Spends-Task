import { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (
            title.trim() === "" ||
            category.trim() === "" ||
            amount.trim() === ""
        ) {
            setError("Please fill in all fields.");
            return;
        }

        const newExpense = {
            id: Date.now(),
            title: title,
            category: category,
            amount: amount
        };

        onAddExpense(newExpense);

        setTitle("");
        setCategory("");
        setAmount("");
        setError("");
    }

    return (
        <section className="form-card">
            <div className="form-heading">
                <div className="form-icon">
                    +
                </div>

                <div>
                    <span>NEW TRANSACTION</span>
                    <h2>Add Expense</h2>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Expense Name</label>

                    <input
                        type="text"
                        placeholder="e.g. Internet"
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />
                </div>

                <div className="form-row">
                    <div className="input-group">
                        <label>Category</label>

                        <input
                            type="text"
                            placeholder="e.g. Education"
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                        />
                    </div>

                    <div className="input-group">
                        <label>Amount</label>

                        <input
                            type="number"
                            placeholder="0"
                            value={amount}
                            onChange={(e) =>
                                setAmount(e.target.value)
                            }
                        />
                    </div>
                </div>

                {error && (
                    <p className="error">
                        {error}
                    </p>
                )}

                <button className="submit-button">
                    Add Expense
                    <span>→</span>
                </button>
            </form>
        </section>
    );
}