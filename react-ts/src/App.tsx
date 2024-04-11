import "./App.css";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";
import TodoContextProvider from "./store/todos-context";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todo />
    </TodoContextProvider>
  );
}

export default App;
