import React from 'react';
import PropTypes from 'prop-types';
import { SidebarMenuSubButton as SidebarMenuSubButtonM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Button inside a nested sidebar menu.
 */
const SidebarMenuSubButton = ({ children, className, ...props }) => {
  return (
    <SidebarMenuSubButtonM className={className} {...props}>
      {children}
    </SidebarMenuSubButtonM>
  );
};

SidebarMenuSubButton.propTypes = {
  /** Submenu button content */
  children: PropTypes.node,

  /** Additional CSS class for styling */
  className: PropTypes.string,
  /** Render a custom element as child
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Size of the submenu button */
  size: PropTypes.oneOf(['sm', 'md']),
  /** Whether the submenu item is active */
  isActive: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
};

export default SidebarMenuSubButton;
