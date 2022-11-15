import { ExpectationDisplay } from "../expectationDisplay";
import { TransactionForm } from "../transactionForm";
import "./index.css";
export const TransactionContainer = ({previsionDates, setPrevisionDates}) => {
  return (
    <div className="transaction-container">
      <TransactionForm setPrevisionDates={setPrevisionDates}/>
      <ExpectationDisplay previsionDates={previsionDates}/>
    </div>
  );
};
