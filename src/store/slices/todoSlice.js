import {createSlice} from '@reduxjs/toolkit';

const initialState= {
    todos: [
        {
            id: 1,
            title: "Clean room",
            completed: false,
        },
        {
            id: 2,
            title: "Read book",
            completed: false,
        }
    ]
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            console.log(action);
            state.todos = [...state.todos, action.payload];
        }
    }
})
export const {addTodo} = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;