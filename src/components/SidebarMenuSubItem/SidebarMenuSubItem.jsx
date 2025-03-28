import React from 'react';
import PropTypes from 'prop-types';
import { SidebarMenuSubItem as SidebarMenuSubItemM } from '../ui/sidebar';

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
  className: PropTypes.string,
};

export default SidebarMenuSubItem;
