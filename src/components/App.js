import './App.css'
import Timer from './Timer.js'
import Start from './Start.js'
import Stop from './Stop.js'

export default function App() {
  
  const time = {
    minutes : 1,
    seconds : 1
  }
  
  return (
    <div className="component-app">
      <Timer time={time}/>
      <div className='timer-controls'>
        <Start />
        <Stop />
      </div>
    </div>
  )
}
