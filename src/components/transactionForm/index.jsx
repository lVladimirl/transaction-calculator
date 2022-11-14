import "./index.css";
export const TransactionForm = () => {
  return (
    <form className="transaction-info-input">
      <h2>Simule sua Antecipação</h2>
      <small>informe o valor da venda</small>
      <input type={"text"}></input>
      <small>em quantas parcelas</small>
      <input type={"text"}></input>
      <small>informe o percentual do MDR</small>
      <input type={"text"}></input>
    </form>
  );
};
