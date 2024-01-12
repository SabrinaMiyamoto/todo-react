import { useState } from 'react';
import './app.css'
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search'
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Ir na academia",
      category: "Pessoal",
      isCompleted: false
    },
  ]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');
    const [sort, setSort] = useState('Asc');

    const addTodo = (text, category) =>{
      const newTodos = [...todos, {
        id: Math.floor(Math.random()* 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
    };
    const removeTodo = (id) => {
      const newTodos = [...todos]
      const filteredTodos= newTodos.filter(todo => todo.id !== id ? todo : null);
      setTodos(filteredTodos)
    };
    const completeTodo = (id) => {
      const newTodos = [...todos]
      newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
      setTodos(newTodos)
    }
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
      <TodoForm addTodo={addTodo}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <Search search={search} setSearch={setSearch}/>
        {todos.filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
        .filter((todos) => todos.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a,b) => sort === "Ascendente" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
