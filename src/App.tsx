import { useState } from "react";
import Typer from "./components/Typer";
import Visualizer from "./components/Visualizer";
import './App.scss';
import {generateWord} from './WordGenerator';

function App() {
  const [word, setWord] = useState<string>(generateWord());
  const next = () => {
    setWord(generateWord());
  }
  return (
    <div className="binder">
      <Visualizer toShow={word} />
      <Typer toType={word} next={next} />
    </div>
  );
}

export default App;
