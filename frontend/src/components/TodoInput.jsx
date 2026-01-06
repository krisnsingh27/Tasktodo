import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux";
import { addTodo } from '../features/todo/todoSlice';

function TodoInput() {
   const [text,setText]=useState("");
   const dispatch =useDispatch();

   const handleadd=(e)=>{
    e.preventDefault();
    if(text.trim()){
        dispatch(addTodo(text));
        setText("");
    }
   }
  return (
    <div>
       <input type="text" value={text} onChange={e=>setText(e.target.value)} placeholder='enter items ....'/>
       <button onClick={handleadd}>Add</button>
    </div>
  )
}

export default TodoInput


