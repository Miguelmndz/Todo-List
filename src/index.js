import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { v4 as uuid } from 'uuid';

const App = () => {
  const [todos, setTodos] = useState([
    { id: uuid(), task: 'Get a Boi' }
  ])
  console.log(todos);

  const handleAddTodo = (e, task) => {
    e.preventDefault()
    const newTask = { id: uuid(), task: task }
    setTodos(todos.concat(newTask))
  }

  const handleDeleteTodo = (e) => {
    
  } 
  
  return (
    <div>
      <TodoForm addTodo={handleAddTodo}/>
      <Todos todos={todos}/>
    </div>
  )
}

const TodoForm = ({addTodo}) => {
  const [task, setNewTask] = useState('New Task')
  const handleTrack = e => setNewTask(e.target.value)
  const handleAddTodo = e => addTodo(e, task)
  
  
  return <div>
    <form onSubmit={handleAddTodo}>
      <input value={task}
        onChange={handleTrack}/>
      <button type='submit'>Add</button>
    </form>
  </div>
}

const Todos = ({todos}) => {
  
  return <div>
    {todos.map(todo => <Todo key={todo.id} todos={todo}/>)}
  </div>
}

const Todo = ({todos}) => {
  return <li>
    {todos.task}
  </li>
}


// const App1 = () => {
//   const [todos, setTodos] = useState([
//     { id: uuid(), task: 'Get a Boi' }
//   ])
//   const [task, setNewTask] = useState('New Task')

//   console.log(todos);

//   const handleAddTodo = e => {
//     e.preventDefault()

//     const newTask = 
//     { id: uuid(), task: task }

//     setTodos(todos.concat(newTask))
//   }
  

//   const handleTrack = e => {
//     setNewTask(e.target.value)
//   }
//   return (
//     <div>
//       <TodoForm1
//         addTodo={handleAddTodo}
//         task={task}
//         trackValue={handleTrack}/>
//     </div>
//   )
// }

// const TodoForm1 = ({addTodo, task, trackValue}) => {
//   return <div>
//     <form onSubmit={addTodo}>
//       <input value={task}
//         onChange={trackValue}/>
//       <button type='submit'>Add</button>
//     </form>
//   </div>
// }

ReactDOM.render (
  <App/>,
  document.getElementById('root')
)
