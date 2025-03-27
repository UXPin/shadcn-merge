import React from 'react';
import PropTypes from 'prop-types';
import { TooltipTrigger as TooltipTriggerM } from '../ui/tooltip';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/tooltip
 * @uxpindescription The trigger element that shows the tooltip on hover or focus.
 */
const TooltipTrigger = ({ children, className, ...props }) => {
  return (
    <TooltipTriggerM className={className} {...props}>
      {children}
    </TooltipTriggerM>
  );
};

TooltipTrigger.propTypes = {
  /** Child tab triggers. */
  children: PropTypes.node,
  /** Additional className for styling. */
  className: PropTypes.string,
  /** If true, the trigger will not render a default DOM element but will instead clone its child and pass the necessary props to it.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
};

export default TooltipTrigger;
