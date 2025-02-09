import React from "react";

export const Button = ({ children, className, asChild, ...props }) => {
  const Comp = asChild ? "a" : "button";
  return (
    <Comp
      className={`px-6 py-3 text-lg font-medium bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};
