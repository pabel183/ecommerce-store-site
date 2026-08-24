import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          `
            w-auto
            rounded-full
            bg-slate-900
            border
            border-transparent
            px-5
            py-3
            text-white
            font-semibold
            shadow-sm
            hover:bg-slate-800
            hover:shadow-md
            active:scale-95
            focus:outline-none
            focus:ring-2
            focus:ring-slate-900
            focus:ring-offset-2
            disabled:cursor-not-allowed
            disabled:opacity-50
            disabled:hover:bg-slate-900
            disabled:active:scale-100
            transition-all
            duration-200
            ease-in-out
          `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;


// import { cn } from "@/lib/utils";
// import { forwardRef } from "react";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

// const Button=forwardRef<HTMLButtonElement, ButtonProps>((
//     {
//         className,
//         children,
//         disabled,
//         ...props
//     },
//     ref,
// )=>{
//     return(
//         <button
//         className={cn(
//             `
//             w-auto
//             rounded-full
//             bg-black
//             border-transparent
//             text-white
//             px-5
//             py-3
//             disabled:cursor-not-allowed
//             disabled:opacity-50
//             font-semibold
//             opacity-75
//             transition
//             `,
//             className
//         )}
//         disabled={disabled}
//         ref={ref}
//         {...props}
//         >
//             {children}
//         </button>
//     );
// });
// Button.displayName="Button";
// export default Button;