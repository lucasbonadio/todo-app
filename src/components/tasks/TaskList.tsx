// src/components/tasks/TaskList.tsx
import { Task } from '@/types';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500 py-4">Nenhuma tarefa por aqui!</p>;
  }

  return (
    <div className="divide-y divide-gray-200">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}