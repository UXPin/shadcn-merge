import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuPortal as DropdownMenuPortalM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription A portal for rendering dropdown content outside the DOM hierarchy.
 */
const DropdownMenuPortal = ({ children, className, ...props }) => {
  return (
    <DropdownMenuPortalM className={className} {...props}>
      {children}
    </DropdownMenuPortalM>
  );
};

DropdownMenuPortal.propTypes = {
  /** The content inside the dropdown portal */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default DropdownMenuPortal;
