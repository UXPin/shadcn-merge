import React from 'react';
import PropTypes from 'prop-types';
import { MenubarCheckboxItem as MenubarCheckboxItemM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription Checkbox item for menu selection.
 */
const MenubarCheckboxItem = ({ children, className, ...props }) => {
  return (
    <MenubarCheckboxItemM
      className={className}
      {...props}
      onSelect={(event) => event.preventDefault()}
    >
      {children}
    </MenubarCheckboxItemM>
  );
};

MenubarCheckboxItem.propTypes = {
  /** Change the component to the specified HTML tag or custom component.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** When true, prevents the user from interacting with the item. */
  disabled: PropTypes.bool,
  /** Event handler called when the user selects an item. */
  onSelect: PropTypes.func,
  /** The controlled checked state of the item. Must be used with onCheckedChange.
   * @uxpinbind onCheckedChange 0
   */
  checked: PropTypes.bool,
  /** The value of the item when initially rendered. Use when you do not need to control its checked state. */
  defaultChecked: PropTypes.bool,
  /** Event handler called when the checked state of the item changes. */
  onCheckedChange: PropTypes.func,
  /** Additional CSS classes for styling. */
  className: PropTypes.string,
  /** Child components to render inside the DropdownMenuCheckboxItem. */
  children: PropTypes.node,
};

export default MenubarCheckboxItem;
