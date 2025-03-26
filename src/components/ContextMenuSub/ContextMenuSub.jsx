import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuSub as ContextMenuSubM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Wrapper for a nested submenu.
 */
const ContextMenuSub = ({ children, className, ...props }) => {
  return (
    <ContextMenuSubM className={className} {...props}>
      {children}
    </ContextMenuSubM>
  );
};

ContextMenuSub.propTypes = {
  /** The submenu trigger and content. */
  children: PropTypes.node.isRequired,
  /** The controlled open state of the submenu. */
  open: PropTypes.bool,
  /** Callback fired when the open state changes. */
  onOpenChange: PropTypes.func,
  className: PropTypes.string,
};

export default ContextMenuSub;
