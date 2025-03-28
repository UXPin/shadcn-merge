import React from 'react';
import PropTypes from 'prop-types';
import { SidebarGroup as SidebarGroupM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Wrapper for grouping related sidebar items.
 */
const SidebarGroup = ({ children, className, ...props }) => {
  return (
    <SidebarGroupM className={className} {...props}>
      {children}
    </SidebarGroupM>
  );
};

SidebarGroup.propTypes = {
  /** Group children */
  children: PropTypes.node,

  /** Additional CSS class for styling */
  className: PropTypes.string,
};

export default SidebarGroup;
