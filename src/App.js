import "./App.css";
import { useState } from "react";
import { TransactionContainer } from "./components/container";

export const App = () => {

  const [previsionDates, setPrevisionDates] = useState();

  return (
    <div className="App">
      <main className="App-main">
        <TransactionContainer
          previsionDates={previsionDates}
          setPrevisionDates={setPrevisionDates}
        />
      </main>
    </div>
  );
}

