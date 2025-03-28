import React from 'react';
import PropTypes from 'prop-types';
import { SidebarFooter as SidebarFooterM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Footer area for actions inside the sidebar.
 */
const SidebarFooter = ({ children, className, ...props }) => {
  return (
    <SidebarFooterM className={className} {...props}>
      {children}
    </SidebarFooterM>
  );
};

SidebarFooter.propTypes = {
  /** Additional CSS class for styling */
  className: PropTypes.string,
  /** Footer children */
  children: PropTypes.node,
};

export default SidebarFooter;
