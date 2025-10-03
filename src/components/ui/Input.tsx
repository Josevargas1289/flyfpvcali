import { forwardRef, ComponentProps } from "react";

const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={`w-full rounded-xl bg-base-card/60 border border-white/10 px-3 py-2 outline-none 
          focus:ring-2 focus:ring-neon-cyan/50 ${className}`}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
