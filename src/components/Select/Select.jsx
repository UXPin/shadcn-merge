import React from 'react';
import PropTypes from 'prop-types';
import { Select as SelectM } from '../ui/select';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/select
 * @uxpindescription Root component for the custom select dropdown.
 */
const Select = ({ children, className, ...props }) => {
  return (
    <SelectM key={props.defaultOpen} className={className} {...props}>
      {children}
    </SelectM>
  );
};

Select.propTypes = {
  /** The content of DialogClose. */
  children: PropTypes.node,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** The value of the select when initially rendered. Use when you do not need to control the state. */
  defaultValue: PropTypes.string,
  /** The controlled value of the select.
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.string,
  /** Event handler called when the value changes. */
  onValueChange: PropTypes.func,
  /** The open state of the select when it is initially rendered. Use when you do not need to control the state. */
  defaultOpen: PropTypes.bool,
  /** The controlled open state of the select.
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** Event handler called when the open state changes. */
  onOpenChange: PropTypes.func,
  /** The reading direction of the select when applicable. 'ltr' or 'rtl'. */
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  /** The name of the select. Submitted with its owning form as part of a name/value pair. */
  name: PropTypes.string,
  /** When true, prevents the user from interacting with the select. */
  disabled: PropTypes.bool,
  /** When true, indicates that the user must select a value before the owning form can be submitted. */
  required: PropTypes.bool,
};

export default Select;
