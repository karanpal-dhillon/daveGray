import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, increaseByAmount } from "./counterSlice"

const Counter = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const [increaseAmount, setIncreaseAmount] = useState(0)
  const addNumber = Number(increaseAmount) || 0

  const resetAll = () => {
    setIncreaseAmount(0)
    dispatch(reset())
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input type="text" value={increaseAmount} onChange={(e) => setIncreaseAmount(e.target.value)} />
      <button onClick={() => dispatch(increaseByAmount(addNumber))}>Add Amount</button>
      <button onClick={resetAll}>Reset</button>
    </section>
  )
}

export default Counter
