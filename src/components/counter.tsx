import { FunctionComponent, useState } from 'react';
import styles from './counter.module.scss'

interface CounterProps {}

const Counter: FunctionComponent<CounterProps> = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div className={styles.button}>value: {count}</div>
    </div>
  );
};

export default Counter;
