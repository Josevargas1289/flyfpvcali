import { forwardRef, ComponentProps } from "react";

const Select = forwardRef<HTMLSelectElement, ComponentProps<"select">>(
  ({ className = "", ...props }, ref) => {
    return (
      <select
        ref={ref}
        {...props}
        className={`w-full rounded-xl bg-base-card/60 border border-white/10 px-3 py-2 outline-none 
          focus:ring-2 focus:ring-neon-cyan/50 ${className}`}
      />
    );
  }
);

Select.displayName = "Select";
export default Select;
