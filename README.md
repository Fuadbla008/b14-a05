<div align="center">

# 🧩 Tech Stack Builder

### Pick your favorite technologies. Build your perfect stack.

A modern React + TypeScript application where users can browse technology cards, build a personal stack, and manage their selections with a smooth and interactive UI.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 📖 About

**Tech Stack Builder** is a lightweight and interactive web app for developers who love planning their tools. It displays a curated collection of technologies as beautiful cards, and lets you assemble your own stack. Every action gives instant visual and toast feedback — making the experience feel polished and alive.

Whether you're a frontend beginner exploring React state or a developer planning your next project stack, this app is a clean demonstration of modern React patterns.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI and state management |
| **TypeScript** | Static typing for safer code |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first styling for a clean UI |
| **React Toastify** | Beautiful toast notifications |
| **React Hooks** | `useState`, `use`, `Suspense` for logic |

---

## ✨ Key Features

### 1. 🎯 Smart Add-to-Stack System
Browse technology cards and add them to your personal stack with one click. Once an item is added, its button becomes **disabled** and shows `✓ Added to Stack`, preventing duplicate selections.

### 2. 🗂️ Live Stack Sidebar with Remove Options
A sticky sidebar shows all your selected technologies with their icons, names, and categories. Remove items individually with the ✕ button or wipe them all at once using **Remove All**.

### 3. 🔔 Toast Notifications for Every Action
Every meaningful action triggers a toast — **success** when adding, **error** when removing a single item, and **warning** when clearing the stack. Instant feedback keeps users informed.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Fuadbla008/b14-a05.git

# Navigate into the project
cd tech-stack-builder

# Install dependencies
npm install

# Start the development server
npm run dev

React Questions & Answers
1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension that lets us write HTML-like code inside JavaScript. It's used in React because it makes the UI structure easy to read and write, and it compiles into React.createElement() calls behind the scenes.

2. What is the difference between props and state?
Props are read-only data passed from a parent component to a child — they cannot be changed by the child. State is data that lives inside a component and can change over time, usually through a setter function like setSelected. In this project, item is passed as a prop to DetailsCard, while selected is state inside Stack.

3. What does the useState hook do, and where did you use it in this project?
useState lets a functional component hold and update its own state. It returns the current value and a function to update it. In this project, we used it inside Stack to keep track of the selected technologies:

tsx
const [selected, setSelected] = useState<Itype[]>([]);
4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs side effects (like fetching data, timers, or DOM updates) after a component renders. Normally, it's used to load JSON data on mount. In this project, we used React 18's use() hook with Suspense as a modern alternative to useEffect for the same purpose — fetching /data.json and suspending the UI until it resolves.

5. Why does every item in a .map() list need a unique key prop?
The key prop helps React identify which items in a list have changed, been added, or been removed. Without a unique key, React can't efficiently update the DOM and may re-render items incorrectly. In our project, each DetailsCard gets key={data.id} because every technology has a unique id.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition using if, &&, or a ternary operator. In this project, we used it to display the empty stack message:

tsx
{selected.length === 0 ? (
  <p className="text-gray-400 text-[14px]">No stack selected</p>
) : (
  <div className="flex flex-col gap-3">
    {selected.map((item) => ( ... ))}
  </div>
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Data goes down through props — for example, Stack passes item, onAdd, and disabled to DetailsCard. For the child to send information up, the parent passes a callback function as a prop. When the child triggers the callback (e.g., clicking "Add to Stack"), it runs the parent's handler — like handleAdd(data) — which updates the parent's state.

