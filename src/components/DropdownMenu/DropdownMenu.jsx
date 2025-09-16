import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenu as DropdownMenuM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription A container component for a dropdown-style menu.
 */
const DropdownMenu = ({ children, className, ...props }) => {
  return (
    <DropdownMenuM key={props.defaultOpen} className={className} {...props} modal={false}>
      {children}
    </DropdownMenuM>
  );
};

DropdownMenu.propTypes = {
  /** The reading direction of the dropdown menu. */
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  /** If true, opens the dropdown menu by default. */
  defaultOpen: PropTypes.bool,
  /** Additional CSS classes for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** If true, the dropdown menu is modal.
   * @uxpinignoreprop
   */
  modal: PropTypes.bool,
  /** The controlled open state of the dropdown menu. Must be used with onOpenChange.
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** Event handler called when the open state of the dropdown menu changes. */
  onOpenChange: PropTypes.func,
  /** Child components to render inside the DropdownMenuRoot. */
  children: PropTypes.node,
};

export default DropdownMenu;
