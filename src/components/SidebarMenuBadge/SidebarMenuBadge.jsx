import React from 'react';
import PropTypes from 'prop-types';
import { SidebarMenuBadge as SidebarMenuBadgeM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Badge for sidebar menu item.
 */
const SidebarMenuBadge = (props) => {
  return <SidebarMenuBadgeM {...props} />;
};

SidebarMenuBadge.propTypes = {
  /** Menu button children */
  children: PropTypes.node,
  /** Additional CSS class for styling */
  className: PropTypes.string,
};

export default SidebarMenuBadge;
