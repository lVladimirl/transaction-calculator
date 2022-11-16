import "./index.css";
import { TransactionForm } from "../form";
import { ExpectationDisplay } from "../list";

export const TransactionContainer = ({ previsionDates, setPrevisionDates }) => {

  return (
    <div className="transaction-container">
      <TransactionForm setPrevisionDates={setPrevisionDates} />
      <ExpectationDisplay previsionDates={previsionDates} />
    </div>
  );
};
