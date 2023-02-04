import { useTodosStore } from './store';

function App() {
  const todos = useTodosStore((state) => state.todos);
  const [text, updateText] = useTodosStore((state) => [
    state.text,
    state.updateText,
  ]);
  const addTodo = useTodosStore((state) => state.addTodo);
  const deleteTodo = useTodosStore((state) => state.deleteTodo);
  const toggleTodo = useTodosStore((state) => state.toggleTodo);
  const editTodo = useTodosStore((state) => state.editTodo);
  const saveEdit = useTodosStore((state) => state.saveEdit);
  const closeTodoEdit = useTodosStore((state) => state.closeTodoEdit);
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateText(e.target.value);
  };

  return (
    <div className="container">
      <h1>Todos</h1>
      <div>
        <input type="text" value={text} onChange={handleText} />
        <button onClick={() => addTodo(text)}>Add todo</button>
      </div>

      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <span className={todo.completed ? 'completed' : ''}>
              {todo.text}
            </span>
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => toggleTodo(todo.id)}>Done</button>
            {todo.edited === true && (
              <div className="modal">
                <input type="text" value={text} onChange={handleText} />
                <button onClick={() => saveEdit(text, todo.id)}>Save</button>
                <button onClick={() => closeTodoEdit(todo.id)}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
