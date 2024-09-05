import { Button } from "@/components/ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function PrimaryButton({
  children,
  className,
  ...others
}: ButtonProps) {
  return (
    <Button
      className={`px-6 py-3 text-white bg-green-600 hover:bg-green-800 ${className}`}
      {...others}
    >
      {children}
    </Button>
  );
}
