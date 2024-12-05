import { type TodoObject } from "../App";
import { type ReactNode } from "react";
import TodoBody from "./TodoBody";
import InfoBox from "./Infobox";

type TodoBodyListProps = {
  todo: TodoObject[];
  onDeleteTodo: (id: number) => void;
};

export default function TodoBodyList({
  onDeleteTodo,
  todo,
}: TodoBodyListProps) {
  let warningBox: ReactNode;
  if (todo.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no todo list yet, Start adding some
      </InfoBox>
    );
  }
  if (todo.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're adding too much todo's
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {todo.map((singleTodo, i) => (
          <TodoBody
            key={i}
            singleTodo={singleTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
