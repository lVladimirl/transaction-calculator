import "./index.css";
import { ExpectationItem } from "../listItem";

export const ExpectationDisplay = ({ previsionDates }) => {
  return (
    <div className="payment-expectations">
      <h3>Você recebera:</h3>
      <hr class="solid"></hr>

      {previsionDates &&
        Object.keys(previsionDates).map((key) => (
          <ExpectationItem key={key} date={key} amount={previsionDates[key]} />
        ))}
    </div>
  );
};
