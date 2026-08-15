import MainCard from "./MainCard";
import RightCard from "./RightCard";
function AboutPage({activeTab}) {
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center lg:flex-row">
        <MainCard />
        <RightCard activeTab={activeTab}/>
      </div>
    </>
  );
}
export default AboutPage;

