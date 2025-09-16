import React from 'react';
import PropTypes from 'prop-types';
import { MenubarSeparator as MenubarSeparatorM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription A separator line between menu items.
 */
const MenubarSeparator = ({ children, className, ...props }) => {
  return (
    <MenubarSeparatorM className={className} {...props}>
      {children}
    </MenubarSeparatorM>
  );
};

MenubarSeparator.propTypes = {
  /** If true, renders the component as a child element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Child components to render inside the MenubarSeparator. */
  children: PropTypes.node,

  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default MenubarSeparator;
