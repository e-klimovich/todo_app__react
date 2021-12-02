import { useState } from "react"
import style from './AddTodo.module.css'

const AddTodo = ({ todo, setTodo }) => {

    const [value, setValue] = useState('')

    const addTodoItem = () => {
        const addTodoItem = [...todo, { id: ++todo.length, text: value }]
        setTodo(addTodoItem)
        setValue('')
    }

    return (
        <div className={style.container}>
            <input placeholder='Add your new todo' value={value} onChange={(e) => setValue(e.target.value)} />
            <button className={style.addButton} onClick={addTodoItem}>+</button>
        </div>
    )
}

export default AddTodo