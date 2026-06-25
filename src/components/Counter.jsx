import useCounter  from "../hooks/Counter";

function Counter({title , initialValue}){
    const {count , increment , decrement , reset} = useCounter(initialValue);

    return (
<div>
            <h2>{title}</h2>
            <p>Current Count: {count}</p>
            <button onClick={increment}>
                + Increment
            </button>
            <button onClick={decrement}>
                - Decrement
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </div>
    );
}

export default Counter;