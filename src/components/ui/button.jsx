"use client";
import React from "react";

export const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  asChild = false,
  ...props
}) => {
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    ghost: "hover:bg-gray-100",
    link: "text-blue-600 hover:underline",
  };

  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3 text-sm",
    lg: "h-10 px-8",
    icon: "h-9 w-9",
  };

  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none";

  if (asChild) {
    const child = React.Children.only(children);
    return React.cloneElement(child, {
      className: `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`,
      ...props,
    });
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
