import React, { useState } from 'react';
import './Todo.css';
import TodoLists from './TodoLists.jsx';
import Button from '@material-ui/core/Button';


const Todo =() => {

    const [inputList, setInputList] = useState("Buy");
    const[Items,setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList(''); 
    };

    const deleteItems = (id) => {
        console.log('deleted');
        setItems((oldItems) => {
            return oldItems.filter((arrElem,index) =>{
                return index !== id; 
            });
        });
    };

    return (
    <>
        <div className ="main_div">
            <div className = "center_div">
                <br />
                <h1> ToDo List</h1>
                <br />
            <input type= "text" placeholder="Add items" onChange={itemEvent}/>
            <button onClick={listOfItems}>+</button>
            <ol>
            {Items.map( (itemval, index) => {
                return <TodoLists 
                key={index}
                id={index} 
                text={itemval} 
                 onSelect = {deleteItems}
                />;
            })}
            </ol>
            </div>
        </div>
    </>
    );
};

export default Todo;