import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuItem as ContextMenuItemM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Individual menu item.
 */
const ContextMenuItem = ({ children, className, ...props }) => {
  return (
    <ContextMenuItemM className={className} {...props}>
      {children}
    </ContextMenuItemM>
  );
};

ContextMenuItem.propTypes = {
  /** The content of the menu item. */
  children: PropTypes.node.isRequired,
  /** If true, the item is disabled. */
  disabled: PropTypes.bool,
  /** Callback fired when the item is selected. */
  onSelect: PropTypes.func,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default ContextMenuItem;
