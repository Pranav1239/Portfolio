const Hero = ({ textEnter, textLeave }) => {
  return (
    <div className="max-w-full  lg:h-[70vh] flex items-end">
      <div className="flex cursor-default p-4 flex-col text-6xl lg:text-7xl">
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          Full Stack Web Dev &
        </h1>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          free To work and make
        </h1>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          Website
        </h1>
      </div>
    </div>
  );
};

export default Hero;
