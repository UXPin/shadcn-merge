import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuSubTrigger as DropdownMenuSubTriggerM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription A trigger element for opening a sub-menu in the dropdown.
 */
const DropdownMenuSubTrigger = ({ children, className, ...props }) => {
  return (
    <DropdownMenuSubTriggerM className={className} {...props}>
      {children}
    </DropdownMenuSubTriggerM>
  );
};

DropdownMenuSubTrigger.propTypes = {
  /** If true, renders the trigger as a child component. */
  asChild: PropTypes.bool,
  /** Additional CSS classes for styling. */
  className: PropTypes.string,
  /** Child components to render inside the DropdownMenuTrigger. */
  children: PropTypes.node,
};

export default DropdownMenuSubTrigger;
