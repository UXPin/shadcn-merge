import React from 'react';
import PropTypes from 'prop-types';
import { MenubarMenu as MenubarMenuM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription A container for a menubar trigger and its content.
 */
const MenubarMenu = ({ children, className, ...props }) => {
  return (
    <MenubarMenuM className={className} {...props}>
      {children}
    </MenubarMenuM>
  );
};

MenubarMenu.propTypes = {
  /** If true, renders the component as a child element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** A unique value associated with the menu. */
  value: PropTypes.string,
  /** Child components to render inside the MenubarMenu. */
  children: PropTypes.node,
};

export default MenubarMenu;
