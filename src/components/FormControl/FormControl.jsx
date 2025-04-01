import React from 'react';
import PropTypes from 'prop-types';
import { FormControl as FormControlM } from '../ui/form';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/form
 * @uxpindescription Slot wrapper for form control input elements.
 */
const FormControl = ({ children, className, ...props }) => {
  return (
    <FormControlM className={className} {...props}>
      {children}
    </FormControlM>
  );
};

FormControl.propTypes = {
  /** Slot content such as <input />, <textarea />, etc. */
  children: PropTypes.node,
  /** Slot props like input, select, etc. */
  id: PropTypes.string,
  /** Additional class name or slot-level customization */
  className: PropTypes.string,
};

export default FormControl;
