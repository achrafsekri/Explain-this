import React, { useRef } from "react";
import { VscDebugStart } from "react-icons/vsc";

type InputTypes = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement> | KeyboardEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
};

const Input = ({ onChange, onSubmit, inputRef }: InputTypes) => {
  // listen for enter key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onSubmit(e);
      }
      
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSubmit]);

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="relative flex w-full px-2 md:w-2/3 h-14"
    >
      <span className="flex items-center justify-center h-full text-sm font-bold bg-black rounded-l-sm md:text-base w-28 md:w-40 text-primary">
        EXPLAIN
      </span>
      <input
        type="text"
        ref={inputRef}
        onChange={onChange}
        className="w-full h-full px-4 py-2 text-lg placeholder-gray-500 border border-gray-300 rounded-sm text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        placeholder="Enter your text here"
      />
      <button
        type="submit"
        className="absolute flex items-center justify-center px-3 py-3 font-bold rounded-sm top-1 right-3 md:right-4 text-text hover:bg-slate-100 focus:bg-slate-200"
      >
        <VscDebugStart className="w-6 h-6" />
      </button>
    </form>
  );
};

export default Input;
