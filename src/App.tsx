import { useState } from "react";
import "./App.css";
import Start from "./screens/Start";

type TScreen = "start" | "question_1" | "question_2" | "question_3" | "finish";

function App() {
  const [currentScreen, setCurrentScreen] = useState<TScreen>("start");

  return (
    <div className="App flex">
      {currentScreen === "start" ? <Start /> : <></>}
    </div>
  );
}

export default App;
