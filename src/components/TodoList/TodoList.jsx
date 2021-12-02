import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import style from './TodoList.module.css'

const TodoList = ({ todo, setTodo }) => {

  const deleteTodo = (id) => {
    const filterTodo = todo.filter(el => el.id !== id)
    setTodo(filterTodo)
  }

  return (
    <div className={style.container}>
      {todo.map((el, index) => {
        return (
          <div key={el.id} className={style.content}>
            <div>
              {++index}. {el.text}
            </div>
            <button className={style.removeButton} onClick={() => deleteTodo(el.id)}>
              <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default TodoList