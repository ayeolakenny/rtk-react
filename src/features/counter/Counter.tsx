import {
	increment,
	decrement,
	counterSelector,
	reset,
	incrementByAmount
} from "./counterSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useState } from "react";

export const Counter = () => {
	const count = useAppSelector(counterSelector);
	const dispatch = useAppDispatch();

	const [incrementAmount, setIncrementAmount] = useState(0)

	const addValue = +incrementAmount || 0

	const resetAll = () => {
		setIncrementAmount(0)
		dispatch(reset())
	}

	return (
		<section>
			<p>{count}</p>
			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
			</div>

			<input
				type="text"
				value={incrementAmount}
				onChange={(e) => setIncrementAmount(+e.target.value)}
			/>

			<div>
				<button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
				<button onClick={resetAll}>Reset</button>
			</div>
		</section>
	)
}
