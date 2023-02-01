import { useSelector, useDispatch } from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'
import { increment, decrement, incrementBy } from './store/slices/counter/counterSlice'

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <p>count is { counter }</p>
      </div>
      <div className="card">
        <button type='button' onClick={()=>{dispatch(increment())}}>
          Increment
        </button>
        <button type='button' onClick={()=>{dispatch(incrementBy(2))}}>
          Increment by 2
        </button>

        <button type='button' onClick={()=>{dispatch(decrement())}}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
