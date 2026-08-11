import { useState } from 'react'
import './App.css'

let nextId = 1

function App() {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setTasks((prev) => [...prev, { id: nextId++, text: trimmed, completed: false }])
    setText('')
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <div className="board">
      <h1>Task Board</h1>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="新しいタスクを入力"
          aria-label="新しいタスク"
        />
        <button type="submit">追加</button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty">タスクはまだありません</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
              </label>
              <button
                type="button"
                className="delete-button"
                onClick={() => deleteTask(task.id)}
                aria-label={`${task.text}を削除`}
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
