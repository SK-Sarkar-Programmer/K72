import Video from "./Video";

const HomeTop = () => {
  return (
    <div className="font-[lausanne-300] text-xl text-center top-10">
      <div>
        <p className="uppercase">The spark for</p>
      </div>
      <div className="flex justify-center items-center gap-x-special-video">
        <p className="uppercase">All</p>
        <div className="w-special-video h-special-video rounded-full -mt-special-video overflow-hidden">
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
