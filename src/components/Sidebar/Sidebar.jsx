import React from 'react';
import PropTypes from 'prop-types';
import {Sidebar as SidebarM, SidebarContext, SidebarProvider} from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Primary sidebar layout container.
 */
const Sidebar = ({ children, className, open, onOpenChange, ...props }) => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    return <SidebarProvider key={props.defaultOpen}  open={open} onOpenChange={onOpenChange}>
      <SidebarM className={className} {...props}>
        {children}
      </SidebarM>
    </SidebarProvider>
  }

  return (
    <SidebarM key={props.defaultOpen} className={className} open={open} onOpenChange={onOpenChange} {...props}>
      {children}
    </SidebarM>

  );
};

Sidebar.propTypes = {
  /** Whether the sidebar is open initially */
  defaultOpen: PropTypes.bool,
  /** Controlled open state
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** Callback for open state change */
  onOpenChange: PropTypes.func,

  /** Sidebar children */
  children: PropTypes.node,
  /** Side the sidebar appears on */
  side: PropTypes.oneOf(['left', 'right']),
  /** Visual variant of the sidebar */
  variant: PropTypes.oneOf(['sidebar', 'floating', 'inset']),
  /** Type of collapsible behavior */
  collapsible: PropTypes.oneOf(['offcanvas', 'icon', 'none']),
  /** Additional CSS class for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
