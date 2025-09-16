import React from 'react';
import PropTypes from 'prop-types';
import { SidebarTrigger as SidebarTriggerM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Button to toggle sidebar visibility.
 */
const SidebarTrigger = (props) => {
  return <SidebarTriggerM {...props} />;
};

SidebarTrigger.propTypes = {
  /** Additional CSS class for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** Click handler */
  onClick: PropTypes.func,
};

SidebarTrigger.displayName = "SidebarTrigger";

export default SidebarTrigger;
