import LeftSection from "./Components/LeftSection";
import Products from "./Components/Products";
import RightSection from "./Components/RightSection";

const App = () => {
  return (
    <div className="flex m-auto space-between w-[90%] ">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default App;
