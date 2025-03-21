import React from 'react';
import PropTypes from 'prop-types';
import { Menubar as MenubarM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription A horizontal menu bar for navigation and actions.
 */
const Menubar = ({ children, className, ...props }) => {
  return (
    <MenubarM className={className} {...props}>
      {children}
    </MenubarM>
  );
};

Menubar.propTypes = {
  /** If true, renders the component as a child element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** The controlled value of the menubar.
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.string,
  /** The value of the menubar when initially rendered. */
  defaultValue: PropTypes.string,
  /** Event handler called when the value changes. */
  onValueChange: PropTypes.func,
  /** The reading direction of the menubar. */
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  /** If true, allows navigation to loop from last item to first, and vice versa. */
  loop: PropTypes.bool,
  /** Child components to render inside the MenubarRoot. */
  children: PropTypes.node,
};

export default Menubar;
