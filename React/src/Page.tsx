import { useState } from "react"

const Page = () => {
  const [todo, settodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      settodo("")
    }
  };

  const removeTodo = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
  };

  return (
    <div>
      <input type="text" name="todo" value={todo} onChange={(e) => settodo(e.target.value)} />
      <button onClick={addTodo}>add</button>
      <ul>
        {todos.map((todo, inx) => (
          <>
            <li key={inx}>{todo}</li>
            <button onClick={() => removeTodo(inx)}>x</button>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Page