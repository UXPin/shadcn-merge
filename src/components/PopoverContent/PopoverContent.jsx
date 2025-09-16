import React from 'react';
import PropTypes from 'prop-types';
import { PopoverContent as PopoverContentM } from '../ui/popover';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/popover
 * @uxpindescription The content displayed inside the popover.
 */
const PopoverContent = ({ children, className, ...props }) => {
  return (
    <PopoverContentM className={className} {...props}>
      {children}
    </PopoverContentM>
  );
};

PopoverContent.propTypes = {
  /** Content children components. */
  children: PropTypes.node,
  /** Additional classes to style the  component.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
  /** When true, the child component will receive all properties.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** The preferred side of the trigger to render against when open. */
  side: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** The preferred alignment against the trigger. May change when collisions occur. */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /** The distance in pixels from the trigger. */
  sideOffset: PropTypes.number,
  /** The distance in pixels from the alignment point.
   */
  alignOffset: PropTypes.number,
  /** When true, overrides the side and alignment preferences to prevent collisions.
   * @uxpinignoreprop
   */
  avoidCollisions: PropTypes.bool,
  /** The padding in pixels used to prevent collisions with boundary edges.
   * @uxpinignoreprop
   */
  collisionPadding: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  /** The element used as the collision boundary. Defaults to the viewport.
   * @uxpinignoreprop
   */
  collisionBoundary: PropTypes.oneOfType([
    PropTypes.instanceOf(Element),
    PropTypes.arrayOf(PropTypes.instanceOf(Element)),
  ]),
  /** When true, hides the content when it is fully detached from the trigger.
   * @uxpinignoreprop
   */
  hideWhenDetached: PropTypes.bool,
  /** The sticky behavior on the align axis.
   * @uxpinignoreprop
   */
  sticky: PropTypes.oneOf(['partial', 'always']),
  /** Event handler called when focus moves into the component after opening.
   * @uxpinignoreprop
   */
  onOpenAutoFocus: PropTypes.func,
  /** Event handler called when focus moves outside the component after closing.
   * @uxpinignoreprop
   */
  onCloseAutoFocus: PropTypes.func,
  /** Event handler called when the escape key is pressed.
   * @uxpinignoreprop
   */
  onEscapeKeyDown: PropTypes.func,
  /** Event handler called when a pointer event occurs outside the component.
   * @uxpinignoreprop
   */
  onPointerDownOutside: PropTypes.func,
  /** Event handler called when focus moves outside the component.
   * @uxpinignoreprop
   */
  onFocusOutside: PropTypes.func,
  /** Event handler called when an interaction occurs outside the component.
   * @uxpinignoreprop
   */
  onInteractOutside: PropTypes.func,
};

export default PopoverContent;
