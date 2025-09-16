import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuSubContent as DropdownMenuSubContentM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription A sub-menu content container within a dropdown menu.
 */
const DropdownMenuSubContent = ({ children, className, ...props }) => {
  return (
    <DropdownMenuSubContentM className={className} {...props}>
      {children}
    </DropdownMenuSubContentM>
  );
};

DropdownMenuSubContent.propTypes = {
  /** The content inside the sub-menu */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default DropdownMenuSubContent;
