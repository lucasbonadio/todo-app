'use client'; // Necessário para usar estado (useState)

import { useState } from 'react';

export function AddTaskForm() {
  const [taskText, setTaskText] = useState('');

  return (
    <form className="flex items-center gap-3 w-full mb-6">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Adicione sua tarefa"
        className="flex-grow p-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        type="submit"
        className="cursor-pointer bg-purple-600 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
      >
        ADD
      </button>
    </form>
  );
}