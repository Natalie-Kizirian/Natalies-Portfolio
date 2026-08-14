import MainCard from "./MainCard";
import RightCard from "./RightCard";
function AboutPage() {
  return (
    <>
      <div className="mx-auto flex w-full flex-col items-center lg:flex-row">
        <MainCard />
        <RightCard />
      </div>
    </>
  );
}
export default AboutPage;
/* import MainCard from "./MainCard";
import RightCard from "./RightCard";
function AboutPage() {
  return (
    <>
      <div className="flex w-full mx-auto flex-col lg:max-w-6xl md:max-w-xl items-center  py-15  md:py-6 lg:flex-row">
        <MainCard />
        <RightCard />
      </div>
    </>
  );
}
export default AboutPage; */
