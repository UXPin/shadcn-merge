import React from 'react';
import PropTypes from 'prop-types';
import { Input as InputM } from '../ui/input';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/input
 * @uxpindescription A styled input field for forms.
 */
const Input = ({ className, ...props }) => {
  return <InputM className={className} {...props} />;
};

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  /** The value of the input element.
   * @uxpinbind onChange 0.target.value
   */
  value: PropTypes.string,
  /** Event handler called when the input value changes. */
  onChange: PropTypes.func,
  /** If true, the input is disabled and cannot be interacted with. */
  disabled: PropTypes.bool,
  /** Specifies whether the input is read-only. */
  readOnly: PropTypes.bool,
  /** The type of input, e.g., 'text', 'email', 'password'. */
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date']),
  /** Name attribute of the input element. */
  name: PropTypes.string,
};

export default Input;
