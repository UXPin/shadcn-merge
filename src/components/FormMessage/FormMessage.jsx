import React from 'react';
import PropTypes from 'prop-types';
import { FormMessage as FormMessageM } from '../ui/form';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/form
 * @uxpindescription Displays error message for the field.
 */
const FormMessage = ({ children, className, ...props }) => {
  return (
    <FormMessageM className={className} {...props}>
      {children}
    </FormMessageM>
  );
};

FormMessage.propTypes = {
  /** Message content (if not derived from error message) */
  children: PropTypes.node,
  /** Additional class name for styling the message */
  className: PropTypes.string,
};

export default FormMessage;
