import HomeBottom from "../../components/home/HomeBottom";
import HomeMiddle from "../../components/home/HomeMiddle";
import HomeTop from "../../components/home/HomeTop";
import Video from "../../components/home/Video";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen fixed">
        <Video />
      </div>
      <div className="w-screen h-screen relative overflow-hidden">
        <div className="w-full h-full flex flex-col justify-between p-[.7vw]">
          <HomeTop />
          <HomeMiddle />
          <HomeBottom />
        </div>
      </div>
    </div>
  );
};

export default Home;
