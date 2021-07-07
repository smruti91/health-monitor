import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm';


const Todo = ({todos,compliteTodo,removeTodo,updateTodo}) => {
    const [edit ,setEdit] = useState({
        id:null,
        value: ''
    });
    
    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id:null,value:''
        });
    };

    if(edit.id)
    {
        return <TodoForm edit = {edit} onSubmit = {submitUpdate} />
    }

    const renderTodo = todos.map((todo,index) => {
       return  (
        <div 
        className = {todo.isComplite ? 'todo-row complete' : 'todo-row'}
        key = {index}
        >
            <div key = {todo.id} onClick = {() => compliteTodo(todo.id) }>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                 className="delete-icon"
                 onClick = {() => removeTodo(todo.id)}
                />
                <TiEdit 
                  className = "edit-icon"
                  onClick = { () => setEdit({id: todo.id, value: todo.text }) }
                />
            </div>
        </div>
       )
    } );

    return ( 
        <>
         {renderTodo}
        </>
     );
}

export default Todo
