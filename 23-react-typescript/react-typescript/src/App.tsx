import Todos from "./components/Todos";
import todo from "../src/models/todo";

function App() {
  const todos = [new todo("Learn React."), new todo("Learn TypeScript.")];
  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
