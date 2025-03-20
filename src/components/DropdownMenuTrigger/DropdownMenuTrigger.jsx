import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuTrigger as DropdownMenuTriggerM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription The button that toggles the dropdown menu visibility.
 */
const DropdownMenuTrigger = ({ children, className, ...props }) => {
  return (
    <DropdownMenuTriggerM className={className} {...props}>
      {children}
    </DropdownMenuTriggerM>
  );
};

DropdownMenuTrigger.propTypes = {
  /** The button or element that triggers the dropdown menu */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default DropdownMenuTrigger;
