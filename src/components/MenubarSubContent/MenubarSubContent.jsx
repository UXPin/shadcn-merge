import React from 'react';
import PropTypes from 'prop-types';
import { MenubarSubContent as MenubarSubContentM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription Content container for the submenu.
 */
const MenubarSubContent = ({ children, className, ...props }) => {
  return (
    <MenubarSubContentM className={className} {...props}>
      {children}
    </MenubarSubContentM>
  );
};

MenubarSubContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MenubarSubContent;
