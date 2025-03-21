import React from 'react';
import PropTypes from 'prop-types';
import { MenubarSubTrigger as MenubarSubTriggerM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription Trigger element for submenu.
 */
const MenubarSubTrigger = ({ children, className, ...props }) => {
  return (
    <MenubarSubTriggerM className={className} {...props}>
      {children}
    </MenubarSubTriggerM>
  );
};

MenubarSubTrigger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MenubarSubTrigger;
