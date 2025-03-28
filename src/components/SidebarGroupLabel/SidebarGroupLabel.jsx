import React from 'react';
import PropTypes from 'prop-types';
import { SidebarGroupLabel as SidebarGroupLabelM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Label for a group of sidebar items.
 */
const SidebarGroupLabel = (props) => {
  return <SidebarGroupLabelM {...props} />;
};

SidebarGroupLabel.propTypes = {
  /** SidebarGroupLabel children */
  children: PropTypes.node,
  /** Additional CSS class for styling */
  className: PropTypes.string,
  /** Render a custom element as child
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
};

export default SidebarGroupLabel;
