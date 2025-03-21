import React from 'react';
import PropTypes from 'prop-types';
import { MenubarSub as MenubarSubM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription Container for submenu.
 */
const MenubarSub = ({ children, className, ...props }) => {
  return (
    <MenubarSubM className={className} {...props}>
      {children}
    </MenubarSubM>
  );
};

MenubarSub.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MenubarSub;
