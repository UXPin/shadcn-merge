import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuItem as DropdownMenuItemM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription An individual menu item inside the dropdown menu.
 */
const DropdownMenuItem = ({ children, disabled, className, ...props }) => {
  return (
    <DropdownMenuItemM disabled={disabled} className={className} {...props}>
      {children}
    </DropdownMenuItemM>
  );
};

DropdownMenuItem.propTypes = {
  /** Change the component to the specified HTML tag or custom component.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** When true, prevents the user from interacting with the item. */
  disabled: PropTypes.bool,
  /** Event handler called when the user selects an item. */
  onSelect: PropTypes.func,
  /** Additional CSS classes for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** Child components to render inside the DropdownMenuItem. */
  children: PropTypes.node,
};

export default DropdownMenuItem;
