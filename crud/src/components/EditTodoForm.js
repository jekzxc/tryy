import React, {useState} from 'react';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id); // Corrected typo: task.id instead of task.idd
        setValue("");
    };

    return (
        <form className='Todoform' onSubmit={handleSubmit}>
            <input type="Text" className='todo-input' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    );
};