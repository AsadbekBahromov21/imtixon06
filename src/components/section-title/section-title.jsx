import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-[#253D4E] font-bold text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] text-start whitespace-nowrap">
      {title}
    </h2>
  );
};

export default SectionTitle;
