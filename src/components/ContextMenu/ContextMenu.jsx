import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenu as ContextMenuM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Root container for the context menu.
 */
const ContextMenu = ({ children, className, ...props }) => {
  return (
    <ContextMenuM className={className} {...props}>
      {children}
    </ContextMenuM>
  );
};

ContextMenu.propTypes = {
  /** The content of the context menu. */
  children: PropTypes.node.isRequired,
  /** The default open state of the menu.
   * @uxpinignoreprop
   */
  defaultOpen: PropTypes.bool,
  /** The controlled open state of the menu.
   * @uxpinbind onOpenChange 0
   * @uxpinignoreprop
   */
  open: PropTypes.bool,
  /** Callback fired when the open state changes.
   * @uxpinignoreprop
   */
  onOpenChange: PropTypes.func,
  /** Additional CSS classes for styling. */
  className: PropTypes.string,
};

export default ContextMenu;
