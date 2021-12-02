import style from './Footer.module.css'

const Footer = ({ todo, setTodo }) => {
  const clearAll = () => {
    setTodo([])
  }
  return (
    <div className={style.container}>
      <h2>You have {todo.length} pending tasks</h2>
      <button className={style.clearAllButton} onClick={clearAll}> Clear All </button>
    </div>
  )
}

export default Footer