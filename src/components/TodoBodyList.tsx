import { type TodoObject } from "../App";
import TodoBody from "./TodoBody";

type TodoBodyListProps = {
  todo: TodoObject[];
  onDeleteTodo: (id: number) => void;
};

export default function TodoBodyList({
  onDeleteTodo,
  todo,
}: TodoBodyListProps) {
  return (
    <ul>
      {todo.map((singleTodo, i) => (
        <TodoBody key={i} singleTodo={singleTodo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
}
