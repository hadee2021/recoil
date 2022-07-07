import './App.css'
import {  useRecoilState, useRecoilValue } from 'recoil'
import { countAtom, countSquareAtom } from './Atom'
import Chart from './components/Chart'

function App() {
  const [count, setCount] = useRecoilState(countAtom)
  const square = useRecoilValue(countSquareAtom)

  return (
    <div className='App'>
      <p>App</p>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <p>square: {square}</p>
      <hr/>
      <Chart />
    </div>
  )
}

export default App
