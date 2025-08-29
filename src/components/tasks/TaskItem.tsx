// src/components/tasks/TaskItem.tsx
import { Task } from "@/types";

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="flex items-center py-4">
      <button
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
          ${
            task.isCompleted
              ? "bg-purple-600 border-purple-600"
              : "border-gray-300 hover:border-purple-500"
          }`}
      >
        {task.isCompleted && <CheckIcon />}
      </button>

      <span
        className={`flex-grow ml-4 text-gray-700 transition-all ${
          task.isCompleted ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="cursor-pointer ml-4 text-gray-400 hover:text-red-500 transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
