import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuSubContent as ContextMenuSubContentM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Content container for the submenu.
 */
const ContextMenuSubContent = ({ children, className, ...props }) => {
  return (
    <ContextMenuSubContentM className={className} {...props}>
      {children}
    </ContextMenuSubContentM>
  );
};

ContextMenuSubContent.propTypes = {
  /** The submenu items to display. */
  children: PropTypes.node.isRequired,
  /** Offset from the submenu trigger. */
  sideOffset: PropTypes.number,
  /** Alignment of the submenu. */
  align: PropTypes.oneOf(['start', 'center', 'end']),
};

export default ContextMenuSubContent;
