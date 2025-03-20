import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuShortcut as DropdownMenuShortcutM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription Displays a keyboard shortcut next to a menu item.
 */
const DropdownMenuShortcut = ({ children, className, ...props }) => {
  return (
    <DropdownMenuShortcutM className={className} {...props}>
      {children}
    </DropdownMenuShortcutM>
  );
};

DropdownMenuShortcut.propTypes = {
  /** The shortcut text */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default DropdownMenuShortcut;
