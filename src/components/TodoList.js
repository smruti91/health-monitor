import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

const TodoList = () => {
    const [todos,setTodos] = useState([]);

    const addTodo = todo => {
        if( !todo.text || /^\s*$/.test(todo.text) ) {
            return;
        }
        const newTodo = [todo ,...todos];
        setTodos (newTodo);
    }

    const updateTodo = (todoId,newValue) => {

        if( !newValue.text || /^\s*$/.test(newValue.text) ) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue:item ) ) );
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
    }
    const completeTodo = (id) => {
       let updatedTodo = todos.map(todo => {
           if(todo.id === id )
           {
               todo.isComplete = !todo.isComplete;
           }
           return todo;
       });
       setTodos(updatedTodo);
    }
    console.log(todos);
    return (
        <div>
            <h1>Whats The plan Today ? </h1>
            <TodoForm onSubmit ={addTodo} />
            <Todo 
              todos = {todos} 
              compliteTodo = {completeTodo} 
              removeTodo = {removeTodo}
              updateTodo = {updateTodo}
              />
        </div>
    )
}

export default TodoList
