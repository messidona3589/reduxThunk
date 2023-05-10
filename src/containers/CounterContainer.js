import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import { useCallback } from "react";

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();

  const onIncreaseAsync = useCallback(() => dispatch(increaseAsync()), [dispatch]);
  const onDecreaseAsync = useCallback(() => dispatch(decreaseAsync()), [dispatch]);

  return <Counter number={number} onIncrease={onIncreaseAsync} onDecrease={onDecreaseAsync}/>;
};

export default CounterContainer;