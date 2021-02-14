import React from 'react'

const Task =  ({ task, ...props }) => {

    const ActionBtn = () => (
    <div className="action-btn">
        {!task.done ? (
        <p onClick={props.doneTask}>🗸</p>

        
        ) : (
        <p onClick={props.deleteTask}>✖️</p> 

        )}</div>
    );
    
    const className = 'task' + (task.done ? '-done' : '');

    return(
        <div className={className}>
            <p>{task.title}</p>
            <ActionBtn></ActionBtn>
        </div>
    )
};

export default Task;