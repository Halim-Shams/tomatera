import './App.css'
import Timer from './Timer.js'

export default function App() {

  // Time values
  const time = {
    work_minutes: 0,
    work_seconds: 10,
    break_minutes: 0,
    break_seconds: 5
  }

  return (
    <div className="component-app">
      <Timer time={time}/>
    </div>
  )
}
