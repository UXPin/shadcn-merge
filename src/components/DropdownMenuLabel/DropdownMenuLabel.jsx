import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuLabel as DropdownMenuLabelM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription A label used within the dropdown menu to describe a group of items.
 */
const DropdownMenuLabel = ({ children, className, ...props }) => {
  return (
    <DropdownMenuLabelM className={className} {...props}>
      {children}
    </DropdownMenuLabelM>
  );
};

DropdownMenuLabel.propTypes = {
  /** Change the component to the specified HTML tag or custom component.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Additional CSS classes for styling. */
  className: PropTypes.string,
  /** Child components to render inside the DropdownMenuLabel. */
  children: PropTypes.node,
};

export default DropdownMenuLabel;
