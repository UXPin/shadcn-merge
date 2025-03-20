import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuSeparator as DropdownMenuSeparatorM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription A separator used to visually divide dropdown menu items.
 */
const DropdownMenuSeparator = ({ className, ...props }) => {
  return <DropdownMenuSeparatorM className={className} {...props} />;
};

DropdownMenuSeparator.propTypes = {
  /** Change the component to the specified HTML tag or custom component. */
  asChild: PropTypes.bool,
  /** Additional CSS classes for styling. */
  className: PropTypes.string,
};

export default DropdownMenuSeparator;
