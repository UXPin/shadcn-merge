import React from 'react';
import PropTypes from 'prop-types';
import { SidebarSeparator as SidebarSeparatorM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Separator line inside the sidebar.
 */
const SidebarSeparator = (props) => {
  return <SidebarSeparatorM {...props} />;
};

SidebarSeparator.propTypes = {
  /** Additional CSS class for styling */
  className: PropTypes.string,
};

export default SidebarSeparator;
