import React, { useEffect, useRef, useState } from 'react'

const TodoForm = (props) => {
    const [input , setInput] = useState(props.edit?props.edit.value:'');

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })

    const handleSubmit = e => {
        e.preventDefault();
       
    props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
    });

        setInput('');
    }

    return (
        <div>
            <form className="todo-form" onSubmit = {handleSubmit} >
                {
                    props.edit ? (
                        <>
                         <input 
                  type="text" 
                   placeholder="edit to do "
                   value = {input}
                   className="todo-input"
                   onChange = { e => setInput(e.target.value) }
                   ref = {inputRef}
                />
                <button className="todo-button" >Update</button>
                        </>
                    ) : 
                    (
                        <>
                        <input 
                  type="text" 
                   placeholder="Add to do "
                   value = {input}
                   className="todo-input"
                   onChange = { e => setInput(e.target.value) }
                   ref = {inputRef}
                />
                <button className="todo-button" >Add</button>
                        </>
                    )
                }
            </form>
        </div>
    )
}

export default TodoForm
