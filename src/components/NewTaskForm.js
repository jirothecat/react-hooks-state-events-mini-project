import React, { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0]);
  };

  return (
      <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-details">Details:</label>
      <input
        id="task-details"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
      />
      <label htmlFor="task-category">Category:</label>
      <select
        id="task-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.filter(cat => cat !== "All").map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;