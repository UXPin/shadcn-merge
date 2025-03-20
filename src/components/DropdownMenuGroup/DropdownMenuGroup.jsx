import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuGroup as DropdownMenuGroupM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription A grouping container for related dropdown menu items.
 */
const DropdownMenuGroup = ({ children, className, ...props }) => {
  return (
    <DropdownMenuGroupM className={className} {...props}>
      {children}
    </DropdownMenuGroupM>
  );
};

DropdownMenuGroup.propTypes = {
  /** Change the component to the specified HTML tag or custom component. */
  asChild: PropTypes.bool,
  /** Additional CSS classes for styling. */
  className: PropTypes.string,
  /** Child components to render inside the DropdownMenuGroup. */
  children: PropTypes.node,
};

export default DropdownMenuGroup;
