import React from 'react';
import PropTypes from 'prop-types';
import { InputOTPSlot as InputOTPSlotM } from '../ui/input-otp';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/input-otp
 * @uxpindescription A single slot representing one digit of the OTP.
 */
const InputOTPSlot = ({ children, className, ...props }) => {
  return <InputOTPSlotM className={className} {...props} />;
};

InputOTPSlot.propTypes = {
  /** Additional className for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default InputOTPSlot;
