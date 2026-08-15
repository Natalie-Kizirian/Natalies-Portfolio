import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
function MainContainer({activeTab , setActiveTab}) {
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center lg:flex-row">
        <LeftCard activeTab={activeTab} setActiveTab={setActiveTab} />
        <RightCard activeTab={activeTab}/>
      </div>
    </>
  );
}
export default MainContainer;

