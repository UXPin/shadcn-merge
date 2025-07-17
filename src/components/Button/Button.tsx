import React from 'react';
import { Button as ButtonM, ButtonProps } from '../ui/button';


interface ExtendedButtonProps extends ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
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
