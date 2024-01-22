import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import "./counter.scss"
import { decrement, increment, reset } from "../redux/slices/counterSlice.ts";
import { RootState } from '../redux/store';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <div className='renderElement'>
      <main className='app'>
        <span className='countLabel'>{count}</span><br/>
        <div className='countButtons'>
          <button className='countBtn' onClick={handleDecrement}>-</button>
          <button className='countBtn' onClick={handleReset}>AC</button>
          <button className='countBtn' onClick={handleIncrement}>+</button>
        </div>
      </main>
    </div >
  );
}

export default Counter;
