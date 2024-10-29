import React from "react";
import Spinner from "../components/Spinner";

const SubmitButton = ({ isSubmitting, text, color }) => {
  return (
    <button
      type="submit"
      className={`w-full flex items-center justify-center ${
        color
          ? "bg-white text-black hover:bg-gray-100"
          : "bg-indigo-600 text-white hover:bg-indigo-700"
      } focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800`}
      disabled={isSubmitting}
    >
      {isSubmitting ? <Spinner /> : text}
    </button>
  );
};

export default SubmitButton;
