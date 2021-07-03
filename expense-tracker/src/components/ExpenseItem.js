import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>July 3rd, 2021</div>
      <div className="expense-item__description">
        <h2>Quest Bars</h2>
        <div className="expense-item__price">$30.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
