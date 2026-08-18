// import Image from "next/image";

// type ButtonProps = {
//   type: "button" | "submit";
//   title: string;
//   icon?: string;
//   variant: string;
//   full?: boolean;
//   className?: string;
// };

// const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
//   return (
//     <button
//       className={`flexCenter gap-3 rounded-full border ${variant} ${
//         full && "w-full"
//       }`}
//       type={type}>
//       {icon && <Image src={icon} alt={title} width={24} height={24} />}
//       <label className="bold-16 whitespace-nowrap cursor-pointer">
//         {title}
//       </label>
//     </button>
//   );
// };

// export default Button;

import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string; // Tailwind classes for color/background/border
  full?: boolean;
  className?: string; // allow custom styles like padding
};

const Button = ({
  type,
  title,
  icon,
  variant,
  full,
  className,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`
        flex items-center justify-center gap-3
        rounded-full border font-semibold
        px-6 py-3   /* <-- default padding */
        transition duration-200
        ${variant}
        ${full ? "w-full" : ""}
        ${className || ""}
      `}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="whitespace-nowrap">{title}</span>
    </button>
  );
};

export default Button;
