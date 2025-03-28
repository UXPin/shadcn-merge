import React from 'react';
import PropTypes from 'prop-types';
import { SidebarContent as SidebarContentM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Scrollable content area inside the sidebar.
 */
const SidebarContent = ({ children, className, ...props }) => {
  return (
    <SidebarContentM className={className} {...props}>
      {children}
    </SidebarContentM>
  );
};

SidebarContent.propTypes = {
  /** Additional CSS class for styling */
  className: PropTypes.string,
  /** Content children */
  children: PropTypes.node,
};

export default SidebarContent;
