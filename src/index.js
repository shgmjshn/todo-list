import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

function App() {
  const [inputValue, setInputValue] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (inputValue.length < 1) {
      alert('Todoを入力してください');
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Todoリスト</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button type="submit">追加</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

root.render(<App />);