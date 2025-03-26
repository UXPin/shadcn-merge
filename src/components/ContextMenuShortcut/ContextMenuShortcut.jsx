import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuShortcut as ContextMenuShortcutM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Displays a keyboard shortcut hint.
 */
const ContextMenuShortcut = ({ children, className, ...props }) => {
  return (
    <ContextMenuShortcutM className={className} {...props}>
      {children}
    </ContextMenuShortcutM>
  );
};

ContextMenuShortcut.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ContextMenuShortcut;
