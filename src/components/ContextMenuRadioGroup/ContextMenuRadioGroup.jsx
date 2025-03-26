import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuRadioGroup as ContextMenuRadioGroupM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Group for radio menu items.
 */
const ContextMenuRadioGroup = ({ children, className, ...props }) => {
  return (
    <ContextMenuRadioGroupM className={className} {...props}>
      {children}
    </ContextMenuRadioGroupM>
  );
};

ContextMenuRadioGroup.propTypes = {
  /** The radio items within the group. */
  children: PropTypes.node.isRequired,
  /** The currently selected value.
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.string,
  /** Callback fired when the selected value changes. */
  onValueChange: PropTypes.func,
  /** Additional CSS classes for styling. */
  className: PropTypes.string,
};

export default ContextMenuRadioGroup;
