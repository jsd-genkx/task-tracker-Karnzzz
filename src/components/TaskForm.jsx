import React, { useState } from 'react'

const TaskForm = ({onAddTask}) => {

    const [input,setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
          onAddTask({ id: Date.now(), input });
          setInput("");
        }

      };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 p-2 border rounded-l-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm