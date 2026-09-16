// import { useState } from 'react';

// interface Todo {
//   id: number;
//   text: string;
//   done: boolean;
// }

// function TodoApp() {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [input, setInput] = useState<string>('');

//   const addTodo = () => {
//     if (!input.trim()) return;
//     setTodos([...todos, { id: Date.now(), text: input, done: false }]);
//     setInput('');
//   };

//   const toggleTodo = (id: number) => {
//     setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
//   };

//   const removeTodo = (id: number) => {
//     setTodos(todos.filter(t => t.id !== id));
//   };

//   return (
//     <div>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="New task"
//       />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <span
//               onClick={() => toggleTodo(todo.id)}
//               style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
//             >
//               {todo.text}
//             </span>
//             <button onClick={() => removeTodo(todo.id)}>x</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }