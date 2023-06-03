import React from 'react';
import { useRecoilState, atom } from 'recoil';


const counterState = atom({
    key: 'counterState',
    default: 0,
  });

function Counter() {
    const [counter, setCounter] = useRecoilState(counterState);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;