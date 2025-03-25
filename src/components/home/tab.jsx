import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const Tab = ({ faq }) => {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <div className="border-b border-gray-500 py-4">
      <div
        href="#"
        onClick={() => setActive((prev) => !prev)}
        className={`${
          active && "text-primary"
        } flex gap-2 cursor-pointer items-center transition-all duration-300 hover:text-chrysler-blue`}
      >
        <span className="text-2xl">
          {active ? <FaCaretDown /> : <FaCaretRight />}
        </span>
        <p>{faq.title}</p>
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
