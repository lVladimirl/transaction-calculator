import "./index.css";
export const ExpectationDisplay = ({previsionDates}) => {
  console.log(previsionDates)
  // transforme o previsionDates em um array de objetos, "key":"value", use foreach para representar o valor
  return (
    <div className="payment-expectations">
      <h3>Você recebera:</h3>
      <hr class="solid"></hr>
      {previsionDates && previsionDates.array.forEach(element => {
        // <p>em {element.key}: {element.value}</p>
      })}
    </div>
  );
};
