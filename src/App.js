import React, { useState } from 'react'
import "./App.css"
function App() {

  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }
    setList ([...list, newTodo])
    setInput('')
  }

  const removeTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id)
    setList(newList)
  }
  return (
    <>
    <div className='container'>
    <h1>
      todolist
    </h1>
    <input value={input} 
    onChange={(e)=> setInput(e.target.value)}
    type="text" name="" id="" />
    <button onClick={() => addTodo(input)} className='list'>add</button>
    <div className='container2'>
 <ol>
        {list.map(
          (todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button onClick={() =>removeTodo(todo.id)}>del</button>

            </li>)
          
        )}
      </ol>
    </div>
    </div>
   
    </>
  )
}

export default App
