import React, { useContext } from "react";

import TodoElement from "./TodoElement";
import classes from "./Todo.module.css";
import { TodosContext } from "../store/todos-context";

const Todo: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  function handleRemove(todoId: string) {
    todoCtx.removeTodo(todoId);
  }

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => {
        return (
          <TodoElement
            key={item.id}
            text={item.text}
            onRemove={() => handleRemove(item.id)}
          />
        );
      })}
    </ul>
  );
};

export default Todo;
