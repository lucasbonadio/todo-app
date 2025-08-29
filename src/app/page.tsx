"use client";
import { AddTaskForm } from "@/components/tasks/addTaskForm";
import { TaskList } from "@/components/tasks/TaskList";
import { Task } from "@/types";
import { getTasks, updateTask } from "@/services/taskService"; // Importamos nossa função
import { useEffect, useState } from "react";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        setError(
          "Não foi possível carregar as tarefas. Verifique se a API está rodando."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleToggleTask = async (id: number) => {
    const taskToToggle = tasks.find((task) => task.id === id);
    if (!taskToToggle) return;

    const updatedTask = {
      ...taskToToggle,
      isCompleted: !taskToToggle.isCompleted,
    };

    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? updatedTask : task))
    );

    try {
      await updateTask(updatedTask);
      console.log("sucesso")
    } catch (error) {
      console.error('Falha ao atualizar a tarefa:', error);
      alert('Não foi possível atualizar a tarefa. Tente novamente.');
      setTasks((currentTasks) =>
        currentTasks.map((task) => (task.id === id ? taskToToggle : task))
      );
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <p className="text-center text-gray-500">Carregando tarefas...</p>;
    }
    if (error) {
      return <p className="text-center text-red-500">{error}</p>;
    }
    return <TaskList tasks={tasks} onToggleTask={handleToggleTask} />;
  };

  return (
    <main className="bg-white w-full max-w-lg rounded-2xl shadow-xl shadow-purple-500/30 border border-purple-500/10 p-6 sm:p-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          To-Do List <span className="text-2xl">📝</span>
        </h1>
      </header>

      <AddTaskForm />

      {renderContent()}
    </main>
  );
}
