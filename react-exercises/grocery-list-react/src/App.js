import React, { useState } from 'react';
import './App.css';

const fakeData = [{name: "apple", value: 1, completed: false}, {name: "banana", value: 1, completed: false}, {name: "mango", value: 1, completed: false}]

function GroceryList(props) {
  return(
    <div className="groceryList">
      {props.groceryList.map(item => (<GroceryItem {...item} key={item.name}/>))}
    </div>
  );
}

function GroceryItem(props) {
  const doneTask = (event) => {
  
  }
  return(
    <div className="groceryItem" id={props.name}>
      {props.name}
      <button onClick={doneTask} value={props.name}>Done</button>
      <button>Delete</button>
    </div>
  );
}

function Form(props) {

  const [groceryItem, setGroceryItem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(groceryItem);
    setGroceryItem('');
  }

  const clearItems = () => {
    props.onClearItems();
  }

  return(
    <form>
      <input type="text" placeholder="Grocery Item" value={groceryItem} onChange={event => setGroceryItem(event.target.value)} required></input>
      <button onClick={handleSubmit}>Add Item</button>
      <button onClick={clearItems}>Clear</button>
    </form>
  );
}


function App() {
  const [groceryList, setGroceryList] = useState(fakeData);
  const addItem = (item) => {
    setGroceryList(prevState => (
      [...prevState, {name: item, value: 1, completed: false}]
    ));
  }
  const deleteItem = (item) => {
    setGroceryList(prevState => (
      prevState.find(item => item['name'] === item)
    ));
  }

  const clearAllItems = () => {
    setGroceryList([]);
  }

  const toggleComplete = (item) => {
    setGroceryList(prevState => (prevState))
  }


  return (
    <div>
      <h1>GROCERY LIST</h1>
      <GroceryList groceryList= {groceryList}/>
      <Form onSubmit={addItem} onClearItems={clearAllItems}></Form>
    </div>
  );
}

export default App;
