import React from 'react';
import { Button as ButtonM, ButtonProps } from '../ui/button';


interface ExtendedButtonProps  {
  onClick?: () => void,
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  type?: "submit" | "reset" | "button"
  /**
   * @uxpincontroltype tailwindclassname
   */
  className?: string,
  children?: React.ReactNode
  disabled?: boolean
  name?: string
  asChild?: boolean
}

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/button
 * @uxpindescription Displays a button or a component that looks like a button.
 */
const Button = React.forwardRef<HTMLButtonElement, ExtendedButtonProps>((props, ref) => {
  return <ButtonM ref={ref} {...props} />;
});

Button.displayName = "Button";

export default Button;
