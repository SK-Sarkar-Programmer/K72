import Video from "./Video";

const HomeTop = () => {
  return (
    <div className="font-[lausanne-300] text-[12vw] md:text-[9.7vw] leading-[10vw] md:leading-[8.7vw] text-center top-10">
      <div>
        <p className="uppercase">The spark for</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="uppercase">All</p>
        <div className="w-[15vw] h-[7vw] rounded-full -mt-[1.2vw] overflow-hidden">
          <Video />
        </div>
        <p className="uppercase">things</p>
      </div>
      <div>
        <p className="uppercase">creative</p>
      </div>
    </div>
  );
};

export default HomeTop;
