import { createSlice } from "@reduxjs/toolkit"

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: [
      {
        id: 1,
        todo: "Learn Redux",
        done: false,
      },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const id = state.value.length + 1
      const newTodo = { id: id, todo: action.payload, done: false }

      state.value.push(newTodo)
    },
    deleteTodo: (state, action) => {
      state.value.splice(action.payload, 1)
    },
    completeTodo: (state, action) => {
      const todo = state.value[action.payload]
      todo.done = !todo.done
    },
  },
})

export const { addTodo, deleteTodo, completeTodo } = todosSlice.actions
export default todosSlice.reducer
