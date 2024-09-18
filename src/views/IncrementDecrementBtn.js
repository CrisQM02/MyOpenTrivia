import Icon from "@mdi/react";
import { mdiPlus, mdiMinus } from "@mdi/js";

const IncrementDecrementBtn = ({ count, increase, decrease }) => {
  return (
    <div className="incDecBtn">
      <button className="dec-btn" onClick={decrease} type="button">
        <Icon className="material-icons btn-icon" path={mdiMinus} />
      </button>
      <p>{count}</p>
      <button className="inc-btn" onClick={increase} type="button">
        <Icon className="material-icons btn-icon" path={mdiPlus} />
      </button>
    </div>
  );
};

export default IncrementDecrementBtn;
