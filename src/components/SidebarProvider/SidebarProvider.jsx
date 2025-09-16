import React from 'react';
import PropTypes from 'prop-types';
import { SidebarProvider as SidebarProviderM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Context provider for managing sidebar state.
 */
const SidebarProvider = ({ children, className, ...props }) => {
  return (
    <SidebarProviderM className={className} {...props}>
      {children}
    </SidebarProviderM>
  );
};

SidebarProvider.propTypes = {
  /** Provider children */
  children: PropTypes.node,

  /** Whether the sidebar is open initially */
  defaultOpen: PropTypes.bool,
  /** Controlled open state
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** Callback for open state change */
  onOpenChange: PropTypes.func,
  /** Additional CSS class for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** Inline style object */
  style: PropTypes.object,
};

export default SidebarProvider;
