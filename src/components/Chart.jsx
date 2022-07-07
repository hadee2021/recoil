import {  useRecoilState } from 'recoil'
import { countAtom } from '../Atom'

function Chart() {
  const [count, setCount] = useRecoilState(countAtom)
  return(
    <div>
      <p>Chart</p>
      <p>count: {count}</p>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  )
}

export default Chart