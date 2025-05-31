import { useReducer } from "react";
import LeftSection from "./Components/LeftSection";
import Products from "./Components/Products";
import RightSection from "./Components/RightSection";
import { cartReducer, intialState } from "./Reducer/cartReducer";

const App = () => {
  const [{ cart, isModalOpen }, dispatch] = useReducer(
    cartReducer,
    intialState
  );
  return (
    <div className="bg-pale-rose ">
      <div className="flex flex-col sm:flex-row m-auto space-between w-[95%]">
        <LeftSection dispatch={dispatch} cart={cart} />
        <RightSection cart={cart} dispatch={dispatch} />
      </div>
      {console.log(cart)}
      {console.log(isModalOpen)}
    </div>
  );
};

export default App;
