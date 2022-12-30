import React from "react";

type buttonProps = {
  lable: string;
  onClick: () => void;
  extraStyle?: string;
};

const Button = ({ lable, onClick, extraStyle }: buttonProps) => {
  return (
    <button
      className={`px-4 py-2 bg-black rounded-sm hover:bg-black/90 text-primary focus-outline-2 outline-accent focus:ring-2 ring-accent ${extraStyle}`}
      onClick={onClick}
    >
      {lable}
    </button>
  );
};

export default Button;
