import React from 'react';
import PropTypes from 'prop-types';
import { MenubarItem as MenubarItemM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription Menu item inside the menubar.
 */
const MenubarItem = ({ children, className, ...props }) => {
  return (
    <MenubarItemM className={className} {...props}>
      {children}
    </MenubarItemM>
  );
};

MenubarItem.propTypes = {
  /** If true, renders the component as a child element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** If true, prevents user interaction. */
  disabled: PropTypes.bool,
  /** Event handler called when the user selects the item. */
  onSelect: PropTypes.func,
  /** Child components to render inside the MenubarItem. */
  children: PropTypes.node,

  className: PropTypes.string,
};

export default MenubarItem;
