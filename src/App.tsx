import { useState } from "react";
import Header from "./components/Header";
import image from "./assets/react.svg";
import TodoBodyList from "./components/TodoBodyList";
import TodoForm from "./components/TodoForm";

export type TodoObject = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  // <TodoObject[]> will tell useState what it will hold
  const [todo, setTodo] = useState<TodoObject[]>([]);
  function addNewTodo(todoTitle: string, todoDesc: string) {
    setTodo((todo) => {
      const newTodo: TodoObject = {
        title: todoTitle,
        description: todoDesc,
        id: Math.random(),
      };
      return [...todo, newTodo];
    });
  }
  function deleteTodo(id: number) {
    setTodo((todo) => todo.filter((singleTodo) => singleTodo.id !== id));
  }
  return (
    <main>
      <Header imageProp={{ src: image, alt: "svg img" }}>
        Typescript Todo List
      </Header>
      <TodoForm onAddNewTodo={addNewTodo} />
      <TodoBodyList todo={todo} onDeleteTodo={deleteTodo} />
    </main>
  );
}
