export default function Header({ total, count }) {
    return (
        <header className="header">
            <div className="brand">
                <div className="brand-mark">
                    $
                </div>

                <div>
                    <h1>Spendly</h1>
                    <p>Personal Expense Tracker</p>
                </div>
            </div>

            <div className="header-info">
                <div>
                    <span>EXPENSES</span>
                    <strong>{count}</strong>
                </div>

                <div>
                    <span>TOTAL</span>
                    <strong>{total} AFN</strong>
                </div>
            </div>
        </header>
    );
}