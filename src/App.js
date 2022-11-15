// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import { TransactionContainer } from "./components/transactionContainer";

function App() {
  const [previsionDates, setPrevisionDates] = useState();
  return (
    <div className="App">
      <main className="App-main">
        <TransactionContainer previsionDates={previsionDates} setPrevisionDates={setPrevisionDates}/>
      </main>
    </div>
  );
}

export default App;
