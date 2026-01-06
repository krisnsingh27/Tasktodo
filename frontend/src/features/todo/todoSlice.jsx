import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const API_URL="http://localhost:4000/api/todos";

export const fetchTodos = createAsyncThunk("todos/get",async()=>{
    const res=await axios.get(API_URL);
    return res.data.data;
});

export const addTodo = createAsyncThunk("todos/add",async(title)=>{
    const res=await axios.post(API_URL,{title});
    return res.data.data;
});

export const toggleTodo = createAsyncThunk("todos/toggle",async(todo)=>{
    const res=await axios.put(`${API_URL}/${todo._id}`,{
        completed:!todo.completed,
    });
    return res.data.data;
});

export const deleteTodo = createAsyncThunk("todo/delete",async(id)=>{
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

const todoSlice =createSlice({
    name:"todos",
    initialState:{items:[],loading:false},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.fulfilled,(state,action)=>{
            state.items=action.payload;
        })
        .addCase(addTodo.fulfilled,(state,action)=>{
            state.items.push(action.payload);
        })
        .addCase(toggleTodo.fulfilled,(state,action)=>{
            const index=state.items.findIndex(t=>t._id===action.payload._id);
            state.items[index]=action.payload;
        })
        .addCase(deleteTodo.fulfilled,(state,action)=>{
            state.items=state.items.filter(t=>t._id!==action.payload);
        });
    }

});

export default todoSlice.reducer;