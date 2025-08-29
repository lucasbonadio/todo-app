// src/services/taskService.ts

import { Task } from '@/types';
import { api } from './apiClient';

type NewTask = Omit<Task, 'id'>;

export const getTasks = () => api.get<Task[]>('/tasks');

export const createTask = (taskData: NewTask) => api.post<Task, NewTask>('/tasks', taskData);

export const updateTask = (task: Task) => api.put<void, Task>(`/tasks/${task.id}`, task);

export const deleteTask = (id: number) => api.delete<void>(`/tasks/${id}`);