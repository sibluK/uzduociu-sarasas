import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { Task} from "../interfaces/interfaces";
import { TaskForm } from "./TaskForm";
import "../styles/TaskList.css";

export function TaskList() {

    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, name: "Task 1", status: false },
        { id: 2, name: "Task 2", status: false },
        { id: 3, name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas tempus nisi nec egestas. Proin dictum mi urna, at consequat nisl sollicitudin in. Pellentesque leo dui, congue id lacinia egestas, interdum ac orci. Aenean iaculis euismod nulla, ac mattis eros hendrerit at. Mauris placerat dapibus ex ut euismod. Vivamus dignissim sapien sed ipsum efficitur rutrum. Aliquam erat volutpat. Sed massa lorem, euismod quis felis sed, bibendum interdum ex. Donec efficitur mattis nunc cursus lacinia. Integer mollis, enim eu consequat venenatis, sem dui finibus est, sed lacinia sem nibh vitae tellus. Aliquam sollicitudin metus id turpis fermentum, sit amet finibus ligula lobortis.", status: false },
    ]);

    function AddTask(name: string) {
        if(tasks.length === 0) {
            const newTask: Task = {
                id: 1,
                name: name,
                status: false,
            }
            setTasks([newTask]);
        } else {
            const newTask: Task = {
                id: tasks[tasks.length - 1].id + 1,
                name: name,
                status: false,
            }
            setTasks([...tasks, newTask]);
        }
    }

    function DeleteTask(taskId: number) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    function HandleStatusChange(taskId: number) {
        setTasks(tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    status: !task.status,
                }
            }
            return task;
        }));
    }

    return (
        <div className="task-list-wrapper">
            <TaskForm AddTask={AddTask}/>
            <div className="task-list">
                {tasks.length === 0 && <span className="no-tasks">Nėra užduočių</span>}
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        DeleteTask={DeleteTask} 
                        HandleStatusChange={HandleStatusChange}
                    />
                ))}
            </div>
        </div>
    );
}