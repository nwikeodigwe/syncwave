import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const Tab = ({ faq }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="tab break-inside-avoid border-b border-gray-500">
      <div
        href="#"
        onClick={() => setActive(!active)}
        className={`${
          active && "text-primary"
        } flex gap-1 cursor-pointer items-center p-4 hover:text-primary transition-all duration-300`}
      >
        {active ? (
          <FaCaretDown className="text-2xl" />
        ) : (
          <FaCaretRight className="text-2xl" />
        )}
        <h2 className="text-md font-bold">{faq.title}</h2>
      </div>
      <div
        className={`tab-content flex flex-col gap-4 p-4 border-t border-gray-500 ${
          !active && "hidden"
        }`}
      >
        <p>{faq.content}</p>
      </div>
    </div>
  );
};

export default Tab;
