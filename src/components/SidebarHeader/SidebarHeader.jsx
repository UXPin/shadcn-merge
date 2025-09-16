import React from 'react';
import PropTypes from 'prop-types';
import { SidebarHeader as SidebarHeaderM } from '../ui/sidebar';
import SidebarGroupLabel from "../SidebarGroupLabel/SidebarGroupLabel";

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

  /** Additional CSS class for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

SidebarHeader.displayName = "SidebarHeader";

export default SidebarHeader;
