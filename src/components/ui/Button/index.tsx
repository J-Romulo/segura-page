import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "dark" | "transparent" | "transparent-white" | "transparent-green" | "transparent-dark";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary:           "bg-cta text-segura-black hover:bg-deep-green hover:text-segura-white",
  secondary:         "bg-go-green text-segura-black hover:bg-segura-black hover:text-segura-white",
  dark:              "bg-deep-green text-segura-white hover:bg-segura-black hover:text-segura-white",
  transparent:       "bg-transparent text-go-green border-2 border-go-green hover:bg-go-green hover:text-segura-black",
  "transparent-white": "bg-transparent text-segura-white border-2 border-segura-white hover:bg-segura-white hover:text-deep-green",
  "transparent-green": "bg-transparent text-mint-green border-2 border-mint-green hover:bg-mint-green hover:text-segura-black",
  "transparent-dark": "bg-transparent text-deep-green border-2 border-deep-green hover:bg-deep-green hover:text-segura-white",
};

const BASE = "font-display px-4 py-2.5 font-semibold rounded-[10px] transition-colors whitespace-nowrap w-fit";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}