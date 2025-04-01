import React from 'react';
import PropTypes from 'prop-types';
import { FormField as FormFieldM } from '../ui/form';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/form
 * @uxpindescription Connects individual fields with form context.
 */
const FormField = ({ children, className, ...props }) => {
  return (
    <FormFieldM className={className} {...props}>
      {children}
    </FormFieldM>
  );
};

FormField.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FormField;
