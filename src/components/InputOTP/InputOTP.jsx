import React from 'react';
import PropTypes from 'prop-types';
import { InputOTP as InputOTPM } from '../ui/input-otp';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/input-otp
 * @uxpindescription Main input field for OTP (One-Time Password) entry.
 */
const InputOTP = ({ children, className, ...props }) => {
  return (
    <div>
      <InputOTPM className={className} {...props}>
        {children}
      </InputOTPM>
    </div>
  );
};

InputOTP.propTypes = {
  /** Controlled value for the input
   * @uxpinbind onChange 0.target.value
   */
  value: PropTypes.string,
  /** Change handler for input updates */
  onChange: PropTypes.func,
  /** Called when input reaches max length */
  onComplete: PropTypes.func,
  /** Additional className for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default InputOTP;
