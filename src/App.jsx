import LeftSection from "./Components/LeftSection";
import Products from "./Components/Products";
import RightSection from "./Components/RightSection";

const App = () => {
  return (
    <div className="bg-pale-rose ">
      <div className="flex flex-col sm:flex-row m-auto space-between w-[95%]">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
};

export default App;
