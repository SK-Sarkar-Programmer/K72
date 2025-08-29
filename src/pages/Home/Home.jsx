import Video from "../../components/home/Video";
import HomeTop from "../../components/home/HomeTop";
import HomeMiddle from "../../components/home/HomeMiddle";
import HomeBottom from "../../components/home/HomeBottom";

const Home = () => {
  return (
    <div>
      <div className="w-dvw h-dvh fixed">
        <Video />
      </div>
      <div className="w-dvw h-dvh relative">
        <div className="w-full h-full flex flex-col justify-end md:justify-between gap-[7vw] md:gap-[2vw] p-[2vw] md:p-[.7vw]">
          <HomeTop />
          <HomeMiddle />
          <HomeBottom />
        </div>
      </div>
    </div>
  );
};

export default Home;
