import { TaskFormProps } from "../interfaces/interfaces";
import { useState } from "react";
import "../styles/TaskForm.css";

export function TaskForm({ AddTask }: TaskFormProps) {

    const [taskName, setTaskName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(taskName === "") {
            setError("Įveskite užduoties pavadinimą");
            return;
        }
        AddTask(taskName);
        setTaskName("");
        setError("");
    }; 

    return (
        <>
            <form className="task-form" onSubmit={handleSubmit}>
                <input
                    type="text" 
                    placeholder="Įveskite užduoties pavadinimą..."
                    className={`task-input ${error ? "error" : ""}`} 
                    onChange={(e) => setTaskName(e.target.value)}
                    value={taskName}
                />
                <button className="task-form-submit-button" type="submit">+ Pridėti užduotį</button>
            </form>
            <span className="task-form-error">{error}</span>
        </>
    );
}