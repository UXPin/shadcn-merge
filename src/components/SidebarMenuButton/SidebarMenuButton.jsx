import React from 'react';
import PropTypes from 'prop-types';
import { SidebarMenuButton as SidebarMenuButtonM } from '../ui/sidebar';
import SidebarMenuSkeleton from "../SidebarMenuSkeleton/SidebarMenuSkeleton";

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Button styled for sidebar navigation.
 */
const SidebarMenuButton = ({ children, className, ...props }) => {
  return (
    <SidebarMenuButtonM className={className} {...props}>
      {children}
    </SidebarMenuButtonM>
  );
};

SidebarMenuButton.propTypes = {
  /** Menu button children */
  children: PropTypes.node,
  /** Additional CSS class for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** Render a custom element as child
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Whether the button is active */
  isActive: PropTypes.bool,
  /** Tooltip string or props for tooltip */
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Visual variant */
  variant: PropTypes.oneOf(['default', 'outline']),
  /** Size of the button */
  size: PropTypes.oneOf(['default', 'sm', 'lg']),
  /** Click handler */
  onClick: PropTypes.func,
};

SidebarMenuButton.displayName = "SidebarMenuButton";

export default SidebarMenuButton;
