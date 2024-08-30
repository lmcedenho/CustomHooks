import { useCounter } from "../hooks/useCounter"

export const CounterApp = () => {

    const {counter,increment,reset,decrement} = useCounter(0)

    return (
        <>
            <h1>Counter</h1>
            <h4>{counter}</h4>
            <button type="button" className="btn btn-primary" onClick={() => increment()}>+1</button>
            <button type="button" className="btn btn-danger" onClick={() => reset()}>reset</button>
            <button type="button" className="btn btn-primary" onClick={() => decrement(1, false)}>-1</button>
        </>
    )
}
