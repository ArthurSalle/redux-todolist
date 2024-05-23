import { useDispatch } from "react-redux"
import { AppDispatch } from "../../app/store"
import { completeTodo, deleteTodo } from "./todosSlice"
import { CircleCheck, CircleX, Trash2 } from "lucide-react"

type TodoType = {
  id: number
  todo: string
  done: boolean
}

type TodosProps = {
  todoItem: TodoType
  index: number
}

export default function Todos({ todoItem, index }: TodosProps) {
  const dispatch: AppDispatch = useDispatch()

  return (
    <li className="flex items-center justify-between gap-12 p-2 ">
      <span className={todoItem.done ? "line-through" : ""}>{todoItem.todo}</span>

      <div className="flex items-center gap-2">
        <button className="" onClick={() => dispatch(completeTodo(index))}>
          {todoItem.done ? <CircleX size={20} strokeWidth={1.75} /> : <CircleCheck size={20} strokeWidth={1.75} />}
        </button>
        <button className="" onClick={() => dispatch(deleteTodo(index))}>
          <Trash2 size={20} strokeWidth={1.75} />
        </button>
      </div>
    </li>
  )
}
