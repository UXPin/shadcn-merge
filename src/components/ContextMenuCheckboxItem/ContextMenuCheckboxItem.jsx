import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuCheckboxItem as ContextMenuCheckboxItemM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription A checkbox menu item.
 */
const ContextMenuCheckboxItem = ({ children, className, ...props }) => {
  return (
    <ContextMenuCheckboxItemM
      className={className}
      {...props}
      onSelect={(event) => event.preventDefault()}
    >
      {children}
    </ContextMenuCheckboxItemM>
  );
};

ContextMenuCheckboxItem.propTypes = {
  /** The content of the checkbox item. */
  children: PropTypes.node.isRequired,
  /** The checked state of the item.
   * @uxpinbind onCheckedChange 0
   */
  checked: PropTypes.bool,
  /** Callback fired when the checked state changes. */
  onCheckedChange: PropTypes.func,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default ContextMenuCheckboxItem;
