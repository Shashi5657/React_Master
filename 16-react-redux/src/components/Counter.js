//we need to use useDispatch for dispatching actions

import { useSelector, useDispatch } from 'react-redux';
import { countActions } from '../store';
import classes from './Counter.module.css';

const Counter = () => {


  //using useSelector to get access to data managed in the store
  //when u use useSelector, redux will automaticlly set up subscription to redux store
  const counter = useSelector(state => state.count)
  const show = useSelector(state => state.showCounter)

  //this dispatch here is a function
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(countActions.increment())
    // dispatch({type : 'increment'})
  }

  const decrementHandler = () => {
    dispatch(countActions.decrement())
    // dispatch({type : 'decrement'})
  }

  //action payloads : amount , extra property
  const increaseHandler = () => {
    dispatch(countActions.increase(5))
    // dispatch({type : 'increase', amount : 5})
  }

  const toggleCounterHandler = () => {
    dispatch(countActions.toggle())
    // dispatch({type : 'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increaseHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
