import { useState } from "react";
import "./App.css";
import Finish from "./screens/Finish";
import Start from "./screens/Start";
import Question from "./screens/question/Question";

type TScreen = "start" | "question_1" | "question_2" | "question_3" | "finish";

function App() {
  const [currentScreen, setCurrentScreen] = useState<TScreen>("start");

  return (
    <div className="App">
      {currentScreen === "start" ? (
        <Start cb={() => setCurrentScreen("question_1")} />
      ) : currentScreen === "question_1" ? (
        <Question cb={() => setCurrentScreen("finish")} />
      ) : (
        <Finish />
      )}
    </div>
  );
}

export default App;
