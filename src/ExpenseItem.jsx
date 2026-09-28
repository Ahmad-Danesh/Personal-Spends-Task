export default function ExpenseItem({
    expense,
    onDeleteExpense
}) {
    return (
        <div className="expense-item">
            <div className="expense-symbol">
                {expense.title.charAt(0).toUpperCase()}
            </div>

            <div className="expense-details">
                <h3>{expense.title}</h3>

                <span>{expense.category}</span>
            </div>

            <div className="expense-amount">
                <strong>
                    {expense.amount} AFN
                </strong>
            </div>

            <button
                className="delete-button"
                onClick={() =>
                    onDeleteExpense(expense.id)
                }
            >
                ×
            </button>
        </div>
    );
}