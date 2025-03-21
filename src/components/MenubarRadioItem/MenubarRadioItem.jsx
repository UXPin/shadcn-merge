import React from 'react';
import PropTypes from 'prop-types';
import { MenubarRadioItem as MenubarRadioItemM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription Individual radio item in the menu.
 */
const MenubarRadioItem = ({ children, className, ...props }) => {
  return (
    <MenubarRadioItemM
      className={className}
      {...props}
      onSelect={(event) => event.preventDefault()}
    >
      {children}
    </MenubarRadioItemM>
  );
};

MenubarRadioItem.propTypes = {
  /** If true, renders the component as a child element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Child components to render inside the DropdownMenuRadioItem. */
  children: PropTypes.node,
  /** If true, disables the radio item, preventing user interaction. */
  disabled: PropTypes.bool,
  /** Event handler called when the user selects the item. */
  onSelect: PropTypes.func,
  /** The value assigned to the radio item. */
  value: PropTypes.string.isRequired,
};

export default MenubarRadioItem;
