const BlurBack = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="z-20 bg-brand opacity-80 w-screen h-screen fixed top-0 left-0"
    ></div>
  );
};

export default BlurBack;
