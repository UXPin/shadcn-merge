import React from 'react';
import PropTypes from 'prop-types';
import { MenubarShortcut as MenubarShortcutM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription A label showing the shortcut key.
 */
const MenubarShortcut = ({ children, className, ...props }) => {
  return (
    <MenubarShortcutM className={className} {...props}>
      {children}
    </MenubarShortcutM>
  );
};

MenubarShortcut.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MenubarShortcut;
