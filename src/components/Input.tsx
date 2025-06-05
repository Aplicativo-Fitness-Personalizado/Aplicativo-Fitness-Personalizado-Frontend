import { type ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  placeholder?: string;
  name?: string;
}

export default function Input({ label, placeholder, type = "text", name, ...props }: InputProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={name} className="w-full pl-3 font-normal">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-sm text-text border-border bg-white px-3 py-2 text-md placeholder:text-muted-foreground border-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-200"
        placeholder={placeholder}
        {...props}
      />
    </div>
  )
}
