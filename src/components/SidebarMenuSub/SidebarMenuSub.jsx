import React from 'react';
import PropTypes from 'prop-types';
import { SidebarMenuSub as SidebarMenuSubM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Container for nested sidebar menu items.
 */
const SidebarMenuSub = ({ children, className, ...props }) => {
  return (
    <SidebarMenuSubM className={className} {...props}>
      {children}
    </SidebarMenuSubM>
  );
};

SidebarMenuSub.propTypes = {
  /** Submenu children */
  children: PropTypes.node,

  /** Additional CSS class for styling */
  className: PropTypes.string,
};

export default SidebarMenuSub;
