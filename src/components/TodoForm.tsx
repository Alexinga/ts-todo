import { type FormEvent, useState } from "react";

type TodoFormProps = {
  onAddNewTodo: (todoTitle: string, todoDesc: string) => void;
};

export default function TodoForm({ onAddNewTodo }: TodoFormProps) {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [enteredSummary, setEnteredSummary] = useState("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!enteredTodo || !enteredSummary) {
      return alert("Please add a todo");
    }
    onAddNewTodo(enteredTodo, enteredSummary);
    setEnteredTodo("");
    setEnteredSummary("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo">Enter Todo</label>
        <input
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
          id="todo"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="summary">Enter Summary</label>
        <input
          value={enteredSummary}
          onChange={(e) => setEnteredSummary(e.target.value)}
          id="summary"
          type="text"
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
