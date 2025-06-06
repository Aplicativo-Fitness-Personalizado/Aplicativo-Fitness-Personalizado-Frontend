import { type ButtonHTMLAttributes } from "react";

interface ButtonActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "warning" | "cancel" | "confirm" | "disabled";
}

export default function Button({
  children,
  onClick,
  variant = "default",
  ...rest
}: ButtonActionProps) {

  const variantClasses: Record<string, string> = {
    default: "bg-primary hover:bg-primary/90 text-text",
    warning: "bg-red-600 text-white hover:bg-red-500",
    cancel: "bg-black text-white hover:bg-gray-800",
    disabled: "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50",
  };

  return (
    <button
      onClick={onClick}
      {...rest}
      disabled={variant === "disabled"}
      className={`flex justify-center items-center w-full cursor-pointer rounded-sm border-none px-3 py-2 text-md font-semibold  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed 
      disabled:opacity-50 ${variantClasses[variant]}`}>
      {children}
    </button>
  )
}
