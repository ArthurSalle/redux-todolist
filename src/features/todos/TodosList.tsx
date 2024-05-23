import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../app/store"
import { addTodo } from "./todosSlice"
import Todos from "./Todos"
import Input from "../../components/Input"
import { Plus } from "lucide-react"
import { useState } from "react"

export default function TodosList() {
  const todos = useSelector((state: RootState) => state.todos.value)
  const dispatch: AppDispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")

  function handleClick() {
    dispatch(addTodo(inputValue))
    setInputValue("")
  }

  function handleChange(event: string) {
    setInputValue(event)
  }

  return (
    <div className="flex justify-center p-8">
      <div className="border border-gray-300 rounded-md p-4 shadow">
        <h2 className="text-2xl font-medium border-b border-gray-300">Todos</h2>

        <div className="flex items-center gap-2 mt-2">
          <Input placeholder="to do..." value={inputValue} handleInputChange={handleChange} />
          <button
            onClick={handleClick}
            disabled={!inputValue}
            className="disabled:opacity-40 cursor-pointer disabled:cursor-default"
          >
            <Plus />
          </button>
        </div>

        <ul className="mt-4 divide-y">
          {todos.map((todo, index) => {
            return <Todos todoItem={todo} index={index} key={index} />
          })}
        </ul>
      </div>
    </div>
  )
}
