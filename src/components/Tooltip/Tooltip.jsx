import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as TooltipM } from '../ui/tooltip';
import { TooltipProvider } from '../ui/tooltip';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/tooltip
 * @uxpindescription Root component that provides tooltip behavior.
 */
const Tooltip = ({ children, className, ...props }) => {
  return (
    <TooltipProvider>
      <TooltipM key={props.defaultOpen} className={className} {...props}>
        {children}
      </TooltipM>
    </TooltipProvider>
  );
};

Tooltip.propTypes = {
  /** Child components. */
  children: PropTypes.node.isRequired,
  /** If true, the tooltip is open by default. */
  defaultOpen: PropTypes.bool,
  /** Controls the open state of the tooltip.
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** Callback function called when the open state changes. */
  onOpenChange: PropTypes.func,
  /** Time in milliseconds from when the user hovers over the trigger until the tooltip opens. */
  delayDuration: PropTypes.number,
  /** If true, prevents the tooltip content from being hoverable. */
  disableHoverableContent: PropTypes.bool,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default Tooltip;
