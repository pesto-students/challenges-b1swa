import React, { useState } from 'react';
import './App.css';

function GroceryList(props) {
  return(
    <div>
      {console.log(props)}
      {props.groceryList.map(grocery => <GroceryItem {...grocery} key={grocery.name}/>)}
    </div>
  );
}

function GroceryItem(props) {
  return(
    <div>
      {props.name}
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
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Grocery Item" value={groceryItem} onChange={event => setGroceryItem(event.target.value)} required></input>
      <button>Add Item</button>
    </form>
  );
}


function App() {
  const [groceryList, setGroceryList] = useState([]);
  const addItem = (item) => {
    setGroceryList(prevState => ([...prevState, {"name": item}]));
  }
  return (
    <div>
      <h1>GROCERY LIST</h1>
      <GroceryList groceryList= {groceryList}/>
      <Form onSubmit={addItem}></Form>
    </div>
  );
}

export default App;
