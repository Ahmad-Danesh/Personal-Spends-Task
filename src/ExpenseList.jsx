import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({
    expenses,
    onDeleteExpense
}) {
    return (
        <section className="expense-list-section">
            <div className="list-heading">
                <div>
                    <span>RECENT ACTIVITY</span>
                    <h2>Your Expenses</h2>
                </div>

                <div className="expense-count">
                    {expenses.length}
                </div>
            </div>

            {expenses.length === 0 ? (
                <div className="empty">
                    <div className="empty-icon">
                        $
                    </div>

                    <h3>No expenses yet</h3>

                    <p>
                        Add your first expense to start
                        tracking your spending.
                    </p>
                </div>
            ) : (
                <div className="expense-list">
                    {expenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            expense={expense}
                            onDeleteExpense={
                                onDeleteExpense
                            }
                        />
                    ))}
                </div>
            )}
        </section>
    );
}