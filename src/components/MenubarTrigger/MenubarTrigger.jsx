import React from 'react';
import PropTypes from 'prop-types';
import { MenubarTrigger as MenubarTriggerM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription The clickable element that triggers the menu content.
 */
const MenubarTrigger = ({ children, className, ...props }) => {
  return (
    <MenubarTriggerM className={className} {...props}>
      {children}
    </MenubarTriggerM>
  );
};

MenubarTrigger.propTypes = {
  /** If true, renders the component as a child element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Child components to render inside the MenubarTrigger. */
  children: PropTypes.node,
};

export default MenubarTrigger;
