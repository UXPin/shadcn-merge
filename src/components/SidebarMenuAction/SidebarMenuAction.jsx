import React from 'react';
import PropTypes from 'prop-types';
import { SidebarMenuAction as SidebarMenuActionM } from '../ui/sidebar';
import SidebarInput from "../SidebarInput/SidebarInput";

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Action button within a sidebar menu item.
 */
const SidebarMenuAction = (...props) => {
  return <SidebarMenuActionM {...props} />;
};

SidebarMenuAction.propTypes = {
  /** Menu button children */
  children: PropTypes.node,
  /** Additional CSS class for styling */
  className: PropTypes.string,
  /** Render a custom element as child
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Show action button only on hover */
  showOnHover: PropTypes.bool,
};

SidebarMenuAction.displayName = "SidebarMenuAction";

export default SidebarMenuAction;
