import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setNewItem(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <div className='form'>
        <input onChange={handleChange} type='text' value={newItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                newItem={todoItem}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
