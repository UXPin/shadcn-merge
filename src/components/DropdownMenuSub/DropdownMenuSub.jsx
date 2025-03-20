import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuSub as DropdownMenuSubM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription A component that creates a sub-menu within a dropdown menu.
 */
const DropdownMenuSub = ({ children, className, ...props }) => {
  return (
    <DropdownMenuSubM className={className} {...props}>
      {children}
    </DropdownMenuSubM>
  );
};

DropdownMenuSub.propTypes = {
  /** The content inside the dropdown sub-menu */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default DropdownMenuSub;
