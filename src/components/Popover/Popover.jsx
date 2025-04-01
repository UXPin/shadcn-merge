import React from 'react';
import PropTypes from 'prop-types';
import { Popover as PopoverM } from '../ui/popover';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/popover
 * @uxpindescription Root wrapper for the popover component.
 */
const Popover = ({ children, className, ...props }) => {
  return (
    <PopoverM className={className} {...props}>
      {children}
    </PopoverM>
  );
};

Popover.propTypes = {
  /** Popover children components. */
  children: PropTypes.node,
  /** The controlled open state of the popover.
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** The initial open state of the popover when rendered. Use when you do not need to control its open state. */
  defaultOpen: PropTypes.bool,
  /** Event handler called when the open state of the popover changes. */
  onOpenChange: PropTypes.func,
  /** When true, prevents interaction with outside elements. */
  modal: PropTypes.bool,
};

export default Popover;
