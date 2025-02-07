export interface Task {
    id: number;
    name: string;
    status: boolean;
}

export interface TaskItemProps {
    task: Task;
    DeleteTask: (taskId: number) => void;
    HandleStatusChange: (taskId: number) => void;
}

export interface TaskFormProps {
    AddTask: (name: string) => void;
}