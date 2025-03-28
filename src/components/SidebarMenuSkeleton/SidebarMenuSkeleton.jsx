import React from 'react';
import PropTypes from 'prop-types';
import { SidebarMenuSkeleton as SidebarMenuSkeletonM } from '../ui/sidebar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/sidebar
 * @uxpindescription Skeleton loader for sidebar menu.
 */
const SidebarMenuSkeleton = (props) => {
  return <SidebarMenuSkeletonM {...props} />;
};

SidebarMenuSkeleton.propTypes = {
  /** Additional CSS class for styling */
  className: PropTypes.string,
  /** Whether to show skeleton icon */
  showIcon: PropTypes.bool,
};

export default SidebarMenuSkeleton;
