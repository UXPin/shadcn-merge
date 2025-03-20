import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuRadioGroup as DropdownMenuRadioGroupM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription A group of radio items inside a dropdown menu, allowing a single selection.
 */
const DropdownMenuRadioGroup = ({
  children,
  className,
  value,
  onValueChange,
  ...props
}) => {
  return (
    <DropdownMenuRadioGroupM
      className={className}
      value={value}
      onValueChange={onValueChange}
      {...props}
    >
      {children}
    </DropdownMenuRadioGroupM>
  );
};

DropdownMenuRadioGroup.propTypes = {
  /** The selected value in the radio group */
  value: PropTypes.string,

  /** Callback function when the value changes */
  onValueChange: PropTypes.func,

  /** The content inside the radio group */
  children: PropTypes.node.isRequired,

  /** Additional class names for styling */
  className: PropTypes.string,
};

export default DropdownMenuRadioGroup;
