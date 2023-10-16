import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShowComponent(!showComponent);
        }}
      >
        SUMIR
      </button>
      {showComponent && <Counter></Counter>}
    </>
  );
}

export default App;
