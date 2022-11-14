import { ExpectationDisplay } from "../expectationDisplay";
import { TransactionForm } from "../transactionForm";
import "./index.css";
export const TransactionContainer = () => {
  return (
    <div className="transaction-container">
      <TransactionForm/>
      <ExpectationDisplay/>
    </div>
  );
};
