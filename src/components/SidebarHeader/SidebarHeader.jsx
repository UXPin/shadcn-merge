import React from 'react';
import PropTypes from 'prop-types';
import { SidebarHeader as SidebarHeaderM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Header area for the sidebar.
 */
const SidebarHeader = ({ children, className, ...props }) => {
  return (
    <SidebarHeaderM className={className} {...props}>
      {children}
    </SidebarHeaderM>
  );
};

SidebarHeader.propTypes = {
  /** Header children */
  children: PropTypes.node,

  /** Additional CSS class for styling */
  className: PropTypes.string,
};

export default SidebarHeader;
