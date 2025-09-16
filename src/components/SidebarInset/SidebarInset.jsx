import React from 'react';
import PropTypes from 'prop-types';
import { SidebarInset as SidebarInsetM } from '../ui/sidebar';
import SidebarInput from "../SidebarInput/SidebarInput";

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Main content wrapper beside the sidebar.
 */
const SidebarInset = ({ children, className, ...props }) => {
  return (
    <SidebarInsetM className={className} {...props}>
      {children}
    </SidebarInsetM>
  );
};

SidebarInset.propTypes = {
  /** Inset children */
  children: PropTypes.node,

  /** Additional CSS class for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

SidebarInset.displayName = "SidebarInset";

export default SidebarInset;
