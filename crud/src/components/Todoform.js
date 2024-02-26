import React, {useState} from 'react';

export const Todoform = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    };

    return (
        <form className='Todoform' onSubmit={handleSubmit}>
            <input type="Text" className='todo-input' value={value} placeholder='What is the Task Today?' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    );
};