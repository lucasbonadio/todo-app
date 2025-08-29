import { AddTaskForm } from '@/components/tasks/addTaskForm';
import { TaskList } from '@/components/tasks/TaskList';
import { Task } from '@/types';

const MOCK_TASKS: Task[] = [
  {
    id: 1, 
    title: 'Aprender projetos com JavaScript',
    description: '',
    isCompleted: false, 
  },
  {
    id: 2, 
    title: 'Fazer um app to-do list',
    description: '',
    isCompleted: false, 
  },
  {
    id: 3, 
    title: 'Hospedar em um servidor online',
    description: '',
    isCompleted: true,
  },
];

export default function HomePage() {
  return (
    <main className="bg-white w-full max-w-lg rounded-2xl shadow-xl shadow-purple-500/30 border border-purple-500/10 p-6 sm:p-8">

      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          To-Do List <span className="text-2xl">📝</span>
        </h1>
      </header>

      <AddTaskForm />

      <TaskList tasks={MOCK_TASKS} />

    </main>
  );
}