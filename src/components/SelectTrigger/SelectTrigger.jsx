import React from 'react';
import PropTypes from 'prop-types';
import { SelectTrigger as SelectTriggerM } from '../ui/select';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/select
 * @uxpindescription Element used to toggle the dropdown.
 */
const SelectTrigger = ({ children, className, ...props }) => {
  return (
    <SelectTriggerM className={className} {...props}>
      {children}
    </SelectTriggerM>
  );
};

SelectTrigger.propTypes = {
  /** The content of the trigger element. */
  children: PropTypes.node.isRequired,
  /** When true, prevents the user from interacting with the trigger. */
  disabled: PropTypes.bool,
  /** Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default SelectTrigger;
