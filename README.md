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