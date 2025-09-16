import React from 'react';
import PropTypes from 'prop-types';
import { SidebarMenuSubItem as SidebarMenuSubItemM } from '../ui/sidebar';
import SidebarRail from "../SidebarRail/SidebarRail";

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Item inside a nested sidebar menu.
 */
const SidebarMenuSubItem = ({ children, className, ...props }) => {
  return (
    <SidebarMenuSubItemM className={className} {...props}>
      {children}
    </SidebarMenuSubItemM>
  );
};

SidebarMenuSubItem.propTypes = {
  /** Submenu item content */
  children: PropTypes.node,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

SidebarMenuSubItem.displayName = "SidebarMenuSubItem";


export default SidebarMenuSubItem;
