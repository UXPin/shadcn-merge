import React from 'react';
import PropTypes from 'prop-types';
import { TooltipContent as TooltipContentM } from '../ui/tooltip';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/tooltip
 * @uxpindescription Content element that shows the tooltip message.
 */
const TooltipContent = ({ children, className, ...props }) => {
  return (
    <TooltipContentM className={className} {...props}>
      {children}
    </TooltipContentM>
  );
};

TooltipContent.propTypes = {
  /** Child components. */
  children: PropTypes.node.isRequired,
  /** If true, the content will not render a default DOM element but will instead clone its child and pass the necessary props to it.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Accessible label for the tooltip content. */
  'aria-label': PropTypes.string,
  /** Callback function called when the escape key is pressed. */
  onEscapeKeyDown: PropTypes.func,
  /** Callback function called when a pointer event occurs outside the content. */
  onPointerDownOutside: PropTypes.func,
  /** If true, the tooltip content is rendered even when the tooltip is not open. */
  forceMount: PropTypes.bool,
  /** The preferred side to display the tooltip relative to the trigger. */
  side: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** The distance in pixels from the trigger. */
  sideOffset: PropTypes.number,
  /** The alignment of the tooltip relative to the trigger. */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /** The offset in pixels from the alignment point. */
  alignOffset: PropTypes.number,
  /** If true, the tooltip will avoid collisions with the viewport. */
  avoidCollisions: PropTypes.bool,
  /** The element used as the collision boundary. */
  collisionBoundary: PropTypes.oneOfType([
    PropTypes.instanceOf(HTMLElement),
    PropTypes.arrayOf(PropTypes.instanceOf(HTMLElement)),
  ]),
  /** The padding in pixels used when calculating collisions. */
  collisionPadding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
  ]),
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default TooltipContent;
