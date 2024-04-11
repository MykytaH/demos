import React, { useState } from "react";
import Todos from "../models/todos";

type TodoContextObj = {
  items: Todos[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodoContextProvider: React.FC<{ children: any }> = (props) => {
  const [todos, setTodos] = useState<Todos[]>([]);

  const handleAddToDo = (todoText: string) => {
    const newTodo = new Todos(todoText);

    setTodos((prev) => [...prev, newTodo]);
  };

  const handleRemoveTodo = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: handleAddToDo,
    removeTodo: handleRemoveTodo,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
