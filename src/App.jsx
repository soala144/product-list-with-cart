import { useReducer } from "react";
import LeftSection from "./Components/LeftSection";
import RightSection from "./Components/RightSection";
import { cartReducer, intialState } from "./Reducer/cartReducer";
import ConfirmOrder from "./Components/ConfirmOrder";

const App = () => {
  const [{ cart, isModalOpen }, dispatch] = useReducer(
    cartReducer,
    intialState
  );
  return (
    <>
      <div className="bg-pale-rose ">
        <div className="flex flex-col sm:flex-row m-auto space-between w-[95%]">
          <LeftSection dispatch={dispatch} cart={cart} />
          <RightSection cart={cart} dispatch={dispatch} />
        </div>
      </div>
      {isModalOpen ? <ConfirmOrder cart={cart} dispatch={dispatch} /> : ""}
    </>
  );
};

export default App;
