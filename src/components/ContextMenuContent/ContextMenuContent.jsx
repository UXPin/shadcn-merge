import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuContent as ContextMenuContentM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Container for the menu items.
 */
const ContextMenuContent = ({ children, className, ...props }) => {
  return (
    <ContextMenuContentM className={className} {...props}>
      {children}
    </ContextMenuContentM>
  );
};

ContextMenuContent.propTypes = {
  /** The menu items to display. */
  children: PropTypes.node.isRequired,
  /** Offset from the trigger.
   * @uxpinignoreprop
   */
  sideOffset: PropTypes.number,
  /** Alignment of the menu.
   * @uxpinignoreprop
   */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /** Additional CSS classes for styling. */
  className: PropTypes.string,
};

export default ContextMenuContent;
