import React from 'react';
import PropTypes from 'prop-types';
import { FormItem as FormItemM } from '../ui/form';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/form
 * @uxpindescription Wrapper that provides layout and spacing for a form field.
 */
const FormItem = ({ children, className, ...props }) => {
  return (
    <FormItemM className={className} {...props}>
      {children}
    </FormItemM>
  );
};

FormItem.propTypes = {
  /** Content of the form item */
  children: PropTypes.node,
  /** Additional class name for styling the wrapper
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default FormItem;
