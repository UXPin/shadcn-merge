import React from 'react';
import PropTypes from 'prop-types';
import { SidebarFooter as SidebarFooterM } from '../ui/sidebar';
import SidebarContent from "../SidebarContent/SidebarContent";

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
  /** Additional CSS class for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** Footer children */
  children: PropTypes.node,
};

SidebarFooter.displayName = "SidebarFooter";

export default SidebarFooter;
