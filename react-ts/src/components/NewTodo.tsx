import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoInput = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTask = todoInput.current!.value;

    if (enteredTask.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredTask);
  };

  return (
    <form action="" onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoInput} required />
      <button>Add Task</button>
    </form>
  );
};

export default NewTodo;
