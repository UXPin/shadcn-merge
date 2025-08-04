import React from 'react';
import PropTypes from 'prop-types';
import { SidebarRail as SidebarRailM } from '../ui/sidebar';
import SidebarSeparator from "../SidebarSeparator/SidebarSeparator";

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Thin interactive strip to resize sidebar.
 */
const SidebarRail = (props) => {
  return <SidebarRailM {...props} />;
};

SidebarRail.propTypes = {
  /** Additional CSS class for styling */
  className: PropTypes.string,
};

SidebarRail.displayName = "SidebarRail";


export default SidebarRail;
