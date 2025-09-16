import React from 'react';
import PropTypes from 'prop-types';
import { SelectValue as SelectValueM } from '../ui/select';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/select
 * @uxpindescription Displays the selected value in the trigger.
 */
const SelectValue = ({ children, className, ...props }) => {
  return (
    <SelectValueM className={className} {...props}>
      {children}
    </SelectValueM>
  );
};

SelectValue.propTypes = {
  /** The content of the SelectValue element. */
  children: PropTypes.node,
  /** The content that will be rendered inside the Select.Value when no value or defaultValue is set.*/
  placeholder: PropTypes.node,
  /** Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default SelectValue;
