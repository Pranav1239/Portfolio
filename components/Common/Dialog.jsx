import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Dialog = ({ isOpen, onClose, children }) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    from: { opacity: 0 },
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <animated.div
      style={animation}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
    >
      <div className="bg-bgbrand p-4 rounded-md">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-6 py-2 bg-zinc-900 text-white rounded-sm"
        >
          Close
        </button>
      </div>
    </animated.div>
  );
};

export default Dialog;
