import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from "react";

import { CATEGORIES, TASKS } from "../data";


function App() {

    const [tasks, setTasks] = useState(TASKS);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleDeleteTask = (taskToDelete) => {
      setTasks(tasks.filter(task => task !== taskToDelete));
    };

    const handleTaskFormSubmit = (newTask) => {
      setTasks([...tasks, newTask]);
    };

    const handleSelectCategory = (category) => {
      setSelectedCategory(category);
    };

    const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <NewTaskForm
          categories={CATEGORIES}
          onTaskFormSubmit={handleTaskFormSubmit}
        />
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    );
}

export default App;
