import { useSelector, useDispatch } from "react-redux";
import { decreNumber, incNumber } from "./actions";

export default function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dis = useDispatch();
  return (
    <div>
      <p>Increment decrement using redux</p>
      <button onClick={() => dis(incNumber(5))}>+5</button>
      <button onClick={() => dis(incNumber())}>+</button>
      <input type="text" value={myState} />
      <button onClick={() => dis(decreNumber(5))}>-5</button>
      <button onClick={() => dis(decreNumber())}>-</button>
    </div>
  );
}
