import React, { useState } from 'react';

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick(event) {
    setIsDone((prevValue) => !prevValue);
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? 'line-through' : 'none' }}
    >
      {props.newItem}
      <button
        onClick={() => {
          props.onChecked(props.id);
        }}
        style={{ float: 'right' }}
      >
        x
      </button>
    </li>
  );
}

export default ToDoItem;
