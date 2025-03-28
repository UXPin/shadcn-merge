import React from 'react';
import PropTypes from 'prop-types';
import { InputOTPGroup as InputOTPGroupM } from '../ui/input-otp';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/input-otp
 * @uxpindescription Container to group OTP input slots together.
 */
const InputOTPGroup = ({ children, className, ...props }) => {
  return (
    <InputOTPGroupM className={className} {...props}>
      {children}
    </InputOTPGroupM>
  );
};

InputOTPGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default InputOTPGroup;
