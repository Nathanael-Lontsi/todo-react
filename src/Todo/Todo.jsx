import './Todo.css';
import React, { useState } from 'react';

function Todo() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem('');
  }

  function DeletItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="PageContent">
      <div className="Container">
        <h1>Todo-list</h1>
        <div className="Input-field">
          <input
            id="input-field"
            type="text"
            placeholder="enter a list of items"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="AddButton" type="submit" onClick={() => addItem()}>
            add
          </button>
        </div>
        <ul>
          {items.map((item) => {
            return (
              <li className="List" key={item.id}>
                {item.value}
                <button
                  className="DeleteBtn"
                  type="button"
                  onClick={() => DeletItem(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
