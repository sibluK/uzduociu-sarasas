import { TaskItemProps } from "../interfaces/interfaces";
import "../styles/TaskItem.css";

export function TaskItem({ task, DeleteTask, HandleStatusChange }: TaskItemProps) {

    return (
        <div className="task-item">
            <div className="task-item-info">
                <span className={`task-item-name ${task.status ? 'completed' : ''}`}>{task.name}</span>
            </div>
            <div className="task-item-actions">
                <button className="task-item-mark-button" onClick={() => HandleStatusChange(task.id)}>{task.status ? "Pažymėti kaip neatlikta" : "Pažymėti kaip atliktą"}</button>
                <button className="task-item-delete-button" onClick={() => DeleteTask(task.id)}>Ištrinti</button>
            </div>

        </div>
    ); 
}