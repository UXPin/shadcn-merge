import React from 'react';
import { Button as ButtonM, ButtonProps } from '../ui/button';
/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/button
 * @uxpindescription Displays a button or a component that looks like a button.
 */
const Button = (props: ButtonProps) => {
  return <ButtonM {...props} />;
};

export default Button;
