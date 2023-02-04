import { create } from 'zustand';

interface Todo {
  id: number | string;
  text: string;
  completed: boolean;
  edited: boolean;
}

interface TodosState {
  todos: Todo[];
  text: string;
  updateText: (value: string) => void;
  addTodo: (text: string) => void;
  deleteTodo: (id: number | string) => void;
  toggleTodo: (id: number | string) => void;
  editTodo: (id: number | string) => void;
  saveEdit: (text: string, id: number | string) => void;
  closeTodoEdit: (id: number | string) => void;
}

export const useTodosStore = create<TodosState>((set, get) => ({
  todos: [],
  text: '',
  updateText: (value) => set({ text: value }),

  addTodo: (text) => {
    const todo = {
      id: Date.now().toString(),
      text: text,
      completed: false,
      edited: false,
    };
    set({ todos: [...get().todos, todo], text: '' });
  },
  deleteTodo: (id) => {
    set({
      todos: get().todos.filter((todo) => todo.id !== id),
    });
  },
  toggleTodo: (id) => {
    set({
      todos: get().todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  },
  editTodo: (id) => {
    set({
      todos: get().todos.map((todo) =>
        todo.id === id ? { ...todo, edited: !todo.edited } : todo
      ),
      text: get().todos.filter((todo) => todo.id === id)[0].text,
    });
  },
  closeTodoEdit: (id) => {
    set({
      todos: get().todos.map((todo) =>
        todo.id === id ? { ...todo, edited: !todo.edited } : todo
      ),
      text: '',
    });
  },
  saveEdit: (text, id) => {
    set({
      todos: get().todos.map((todo) =>
        todo.id === id ? { ...todo, text: text, edited: !todo.edited } : todo
      ),
      text: '',
    });
  },
}));
