import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenuSubTrigger as ContextMenuSubTriggerM } from '../ui/context-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/context-menu
 * @uxpindescription Trigger to open a submenu.
 */
const ContextMenuSubTrigger = ({ children, className, ...props }) => {
  return (
    <ContextMenuSubTriggerM className={className} {...props}>
      {children}
    </ContextMenuSubTriggerM>
  );
};

ContextMenuSubTrigger.propTypes = {
  /** The content of the submenu trigger. */
  children: PropTypes.node.isRequired,
  /** If true, the trigger is disabled. */
  disabled: PropTypes.bool,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default ContextMenuSubTrigger;
