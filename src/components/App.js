import './App.css'
import Timer from './Timer.js'

export default function App() {
  
  const time = {
    minutes : 1,
    seconds : 1
  }
  
  return (
    <div className="component-app">
      <Timer time={time}/>
    </div>
  )
}
