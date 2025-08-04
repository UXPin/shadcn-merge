import React from 'react';
import PropTypes from 'prop-types';
import { SidebarGroupAction as SidebarGroupActionM } from '../ui/sidebar';
import SidebarGroup from "../SidebarGroup/SidebarGroup";

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Action button inside a group.
 */
const SidebarGroupAction = (props) => {
  return <SidebarGroupActionM {...props} />;
};

SidebarGroupAction.propTypes = {
  /** Header children */
  children: PropTypes.node,
  /** Click handler */
  onClick: PropTypes.func,
  /** Additional CSS class for styling */
  className: PropTypes.string,
  /** Render a custom element as child
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
};

SidebarGroupAction.displayName = "SidebarGroupAction";

export default SidebarGroupAction;
