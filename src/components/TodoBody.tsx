import { TodoObject } from "../App";

type TodoBodyProps = {
  singleTodo: TodoObject;
  onDeleteTodo: (id: number) => void;
};

export default function TodoBody({ singleTodo, onDeleteTodo }: TodoBodyProps) {
  return (
    <li>
      <article>
        <div>
          <h2>{singleTodo.title}</h2>
          <p>{singleTodo.description}</p>
        </div>
        <button onClick={() => onDeleteTodo(singleTodo.id)}>Delete</button>
      </article>
    </li>
  );
}
