
import { useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../state/store"
import { useSelector } from "react-redux"
import { decrement, increment, incrementByAmout, incrementAsync } from "../state/counter/counterSlice"
import { useState } from "react"


export const CountCounter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>();

    const [value, setValue] = useState<number>(0);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
        setValue(parseInt(e.target.value, 10));
    }


  return (
    <div>
        <input type="text" value={value} onChange={handleChange}></input>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmout(value))}>Increment By Amount</button>
        <button onClick={() => dispatch(incrementAsync(value))}>Increment Async</button>
       
    </div> 
  )
}
