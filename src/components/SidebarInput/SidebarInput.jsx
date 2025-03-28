import React from 'react';
import PropTypes from 'prop-types';
import { SidebarInput as SidebarInputM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Input field inside the sidebar.
 */
const SidebarInput = (props) => {
  return <SidebarInputM {...props} />;
};

SidebarInput.propTypes = {
  /** Additional CSS class for styling */
  className: PropTypes.string,
};

export default SidebarInput;
