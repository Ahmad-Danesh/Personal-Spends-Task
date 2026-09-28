export default function Summary({ expenses, total }) {
    const highestExpense = expenses.reduce(
        (highest, expense) => {
            if (
                Number(expense.amount) >
                Number(highest.amount)
            ) {
                return expense;
            }

            return highest;
        },
        expenses[0] || {
            title: "None",
            amount: 0
        }
    );

    return (
        <aside className="summary">
            <div className="summary-top">
                <span>OVERVIEW</span>

                <div className="summary-circle">
                    ↗
                </div>
            </div>

            <h2>Spending<br />Overview</h2>

            <div className="total-card">
                <span>Total Spending</span>

                <strong>
                    {total}
                </strong>

                <small>AFN</small>
            </div>

            <div className="summary-stats">
                <div className="summary-stat">
                    <span>Transactions</span>
                    <strong>
                        {expenses.length}
                    </strong>
                </div>

                <div className="summary-stat">
                    <span>Highest Expense</span>
                    <strong>
                        {highestExpense.amount} AFN
                    </strong>
                </div>
            </div>

            <div className="tip">
                <div className="tip-icon">
                    💡
                </div>

                <div>
                    <strong>Money Tip</strong>

                    <p>
                        Keep track of every expense
                        to understand where your money
                        goes.
                    </p>
                </div>
            </div>
        </aside>
    );
}