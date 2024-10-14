// src/TaskModal.js

import React, { useState } from 'react';
import Modal from 'react-modal';

const TaskModal = ({ isOpen, onRequestClose, onSave, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [category, setCategory] = useState(task ? task.category : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, category, id: task ? task.id : Date.now(), start: task ? task.start : new Date() });
    setTitle('');
    setDescription('');
    setCategory('');
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal" overlayClassName="overlay">
      <h2 className="text-lg font-bold mb-4">{task ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded p-2 w-full mb-2"
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded p-2 w-full mb-2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded p-2 w-full mb-4"
        >
          <option value="">Select Category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Urgent">Urgent</option>
        </select>
        <div className="flex justify-between mt-4">
          <button type="button" onClick={onRequestClose} className="bg-gray-300 p-2 rounded">
            Cancel
          </button>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            {task ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default TaskModal;
