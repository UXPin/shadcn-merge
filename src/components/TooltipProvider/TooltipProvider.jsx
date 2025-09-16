import React from 'react';
import PropTypes from 'prop-types';
import { TooltipProvider as TooltipProviderM } from '../ui/tooltip';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/tooltip
 * @uxpindescription Provides context for tooltips, useful for managing delay and scope.
 */
const TooltipProvider = ({ children, className, ...props }) => {
  return (
    <TooltipProviderM className={className} {...props}>
      {children}
    </TooltipProviderM>
  );
};

TooltipProvider.propTypes = {
  /** Child components. */
  children: PropTypes.node.isRequired,
  /** Time in milliseconds from when the user hovers over the trigger until the tooltip opens. */
  delayDuration: PropTypes.number,
  /** Time in milliseconds to wait before showing the tooltip again after it was closed. */
  skipDelayDuration: PropTypes.number,
  /** If true, prevents the tooltip content from being hoverable. */
  disableHoverableContent: PropTypes.bool,
  /**
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default TooltipProvider;
