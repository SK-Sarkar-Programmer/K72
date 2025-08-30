const SectionOne = () => {
  return (
    <div className="font-[lausanne-500]">
      <div className="absolute top-[23%] left-[30%] bg-red-500 w-[15vw] h-[20vw] rounded-3xl overflow-hidden">
        <img
          src="../../../public/images/CAMILLE_640X960_2-640x960.jpg"
          alt="error"
        />
      </div>
      <div className="relative">
        <div className="text-center mt-[55vh]">
          <h1 className="text-[20vw] leading-[17vw]">
            SEVEN7Y <br /> TWO
          </h1>
        </div>
        <div className="w-[60%] ml-auto">
          <p className="text-5xl indent-[19vw]">
            We’re inquisitive and open-minded, and we make sure creativity
            crowds out ego from every corner. A brand is a living thing, with
            values, a personality and a story. If we ignore that, we can achieve
            short-term success, but not influence that goes the distance. We
            bring that perspective to every brand story we help tell.
          </p>
        </div>
        <div className="w-[80%] m-auto py-[12vw]">
          <div className="grid grid-cols-3 gap-[1vw] pb-[7vw]">
            <div className="w-[27%]">
              <h2 className="text-xl">Expertise</h2>
            </div>
            <div className="w-[65%]">
              <ul>
                <li className="text-xl">Strategy</li>
                <li className="text-xl">Advertising</li>
                <li className="text-xl">Branding</li>
                <li className="text-xl">Design</li>
                <li className="text-xl">Content</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[1vw]">
            <div className="w-full">
              <p className="text-xl">
                Our Work_ Born in curiosity, raised by dedication and fed with a
                steady diet of creativity.
              </p>
            </div>
            <div className="w-full">
              <p className="text-xl">
                Our Creative_ Simmering in an environment where talent can come
                to a full boil. Encouraged to become the best versions of
                ourselves.
              </p>
            </div>
            <div className="w-full">
              <p className="text-xl">
                Our Culture_ We’re open to each other. Period. The team works
                together to create a space that makes us proud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
