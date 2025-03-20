import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuRadioItem as DropdownMenuRadioItemM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription A selectable radio item within a DropdownMenuRadioGroup.
 */
const DropdownMenuRadioItem = ({ children, value, className, ...props }) => {
  return (
    <DropdownMenuRadioItemM value={value} className={className} {...props}>
      {children}
    </DropdownMenuRadioItemM>
  );
};

DropdownMenuRadioItem.propTypes = {
  /** If true, renders the component as a child element. */
  asChild: PropTypes.bool,
  /** Child components to render inside the DropdownMenuRadioItem. */
  children: PropTypes.node,
  /** If true, disables the radio item, preventing user interaction. */
  disabled: PropTypes.bool,
  /** Event handler called when the user selects the item. */
  onSelect: PropTypes.func,
  /** The value assigned to the radio item. */
  value: PropTypes.string.isRequired,
};

export default DropdownMenuRadioItem;
