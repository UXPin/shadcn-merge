import React from 'react';
import PropTypes from 'prop-types';
import { FormDescription as FormDescriptionM } from '../ui/form';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/form
 * @uxpindescription Helper or description text for the field.
 */
const FormDescription = ({ children, className, ...props }) => {
  return (
    <FormDescriptionM className={className} {...props}>
      {children}
    </FormDescriptionM>
  );
};

FormDescription.propTypes = {
  /** Description text or node */
  children: PropTypes.node,
  /** Additional class name for styling the description
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default FormDescription;
