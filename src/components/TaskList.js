import React from "react";

const TaskList = ({ tasks, deleteTask }) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Priority</th>
        <th>Due Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{task.priority}</td>
          <td>{task.dueDate}</td>
          <td>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TaskList;
