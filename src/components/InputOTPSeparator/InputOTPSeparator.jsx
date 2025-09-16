import React from 'react';
import PropTypes from 'prop-types';
import { InputOTPSeparator as InputOTPSeparatorM } from '../ui/input-otp';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/input-otp
 * @uxpindescription Visual separator (e.g., dash) between OTP groups.
 */
const InputOTPSeparator = ({ children, className, ...props }) => {
  return <InputOTPSeparatorM className={className} {...props} />;
};

InputOTPSeparator.propTypes = {
  /** Additional className for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default InputOTPSeparator;
