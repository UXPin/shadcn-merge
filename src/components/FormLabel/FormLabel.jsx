import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel as FormLabelM } from '../ui/form';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/form
 * @uxpindescription Label associated with a form control.
 */
const FormLabel = ({ children, className, ...props }) => {
  return (
    <FormLabelM className={className} {...props}>
      {children}
    </FormLabelM>
  );
};

FormLabel.propTypes = {
  /** Label text or node */
  children: PropTypes.node,
  /** Additional class name for styling the label */
  className: PropTypes.string,
  /** ID to associate the label with input */
  htmlFor: PropTypes.string,
};

export default FormLabel;
