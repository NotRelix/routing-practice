import React from "react";

function TaskItem({ task, onDelete }) {
    function handleItemClick() {
        onDelete(task);
    }

    return (
        <div className="task" onClick={handleItemClick}>
            <p>{task}</p>
        </div>
    )
}

export default TaskItem