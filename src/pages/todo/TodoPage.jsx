import React, { useActionState } from 'react'
import { useSelector } from 'react-redux'
import { TodoCard } from './TodoCard';



export default function TodoPage() {

  const { todos } = useSelector((state) => state.todoSlice);


  return (
    <div>

      {todos.length < 1 && <h1>Add Some Todos</h1>}
      {todos.map((todo, i) => {
        return <TodoCard key={todo.id} todo={todo} index={i} />;
      })}

    </div>
  )
}
