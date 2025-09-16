import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuTrigger as ContextMenuTriggerM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Element that opens the context menu on right-click.
 */
const ContextMenuTrigger = ({ children, className, ...props }) => {
  return (
    <ContextMenuTriggerM className={className} {...props}>
      {children}
    </ContextMenuTriggerM>
  );
};

ContextMenuTrigger.propTypes = {
  children: PropTypes.node,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default ContextMenuTrigger;
