import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState ("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!value || !category) return;
      addTodo(value, category)
      setValue('');
      setCategory('');
  }

  return (
    <div className='todo-form'>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
       <input type="text" value={value} placeholder='Digite o título' onChange={(e) => setValue(e.target.value)}/> 
       <select value={category} onChange={(e) => setCategory(e.target.value)}>
         <option value="">selecione uma categoria</option>
         <option value="Trabalho">Trabalho</option>
         <option value="Pessoal">Pessoal</option>
         <option value="Estudos">Estudos</option>
      </select>
    <div className='task-button'>
    <button type='submit' className='taskButton'>Criar tarefa</button>
    </div>
    </form>
    </div>
  )
}

export default TodoForm
