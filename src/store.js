import { create } from 'zustand';

export const useTodosStore = create((set, get) => ({
  todos: [
    { id: 1, text: 'Bye me', completed: false, edit: false },
    { id: 2, text: 'Bye you', completed: false, edit: false },
  ],
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
  saveEdit: (text, id) => {
    set({
      todos: get().todos.map((todo) =>
        todo.id === id ? { ...todo, text: text, edited: !todo.edited } : todo
      ),
      text: '',
    });
  },
}));
