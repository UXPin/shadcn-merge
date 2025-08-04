import React from 'react';
import PropTypes from 'prop-types';
import { SidebarMenuItem as SidebarMenuItemM } from '../ui/sidebar';
import SidebarMenuSkeleton from "../SidebarMenuSkeleton/SidebarMenuSkeleton";

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription List item within a sidebar menu.
 */
const SidebarMenuItem = ({ children, className, ...props }) => {
  return (
    <SidebarMenuItemM className={className} {...props}>
      {children}
    </SidebarMenuItemM>
  );
};

SidebarMenuItem.propTypes = {
  /** Menu item children */
  children: PropTypes.node,
  /** Additional CSS class for styling */
  className: PropTypes.string,
};

SidebarMenuItem.displayName = "SidebarMenuItem";

export default SidebarMenuItem;
