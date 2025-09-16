import React from 'react';
import PropTypes from 'prop-types';
import { SelectScrollUpButton as SelectScrollUpButtonM } from '../ui/select';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/select
 * @uxpindescription Button for scrolling up through options.
 */
const SelectScrollUpButton = ({ children, className, ...props }) => {
  return (
    <SelectScrollUpButtonM className={className} {...props}>
      {children}
    </SelectScrollUpButtonM>
  );
};

SelectScrollUpButton.propTypes = {
  /** The content of the SelectScrollUpButton. */
  children: PropTypes.node.isRequired,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
};

export default SelectScrollUpButton;
