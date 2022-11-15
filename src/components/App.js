import './App.css'
import Timer from './Timer.js'

export default function App() {

  // Time values
  const time = {
    work_minutes: 25,
    work_seconds: 0,
    break_minutes: 5,
    break_seconds: 0
  }

  return (
    <div className="component-app">
      <Timer time={time}/>
    </div>
  )
}
