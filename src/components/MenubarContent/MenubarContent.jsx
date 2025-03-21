import React from 'react';
import PropTypes from 'prop-types';
import { MenubarContent as MenubarContentM } from '../ui/menubar';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/menubar
 * @uxpindescription The container for menu items displayed when a trigger is clicked.
 */
const MenubarContent = ({ children, className, ...props }) => {
  return (
    <MenubarContentM className={className} {...props}>
      {children}
    </MenubarContentM>
  );
};

MenubarContent.propTypes = {
  /** If true, renders the component as a child element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** The preferred side of the trigger to render against when open. */
  side: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** The distance in pixels from the trigger. */
  sideOffset: PropTypes.number,
  /** The preferred alignment against the trigger. */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /** An offset in pixels from the 'start' or 'end' alignment options. */
  alignOffset: PropTypes.number,
  /** If true, overrides the side and align preferences to prevent collisions with boundary edges. */
  avoidCollisions: PropTypes.bool,
  /** The element used as the collision boundary. */
  collisionBoundary: PropTypes.oneOfType([
    PropTypes.instanceOf(HTMLElement),
    PropTypes.arrayOf(PropTypes.instanceOf(HTMLElement)),
  ]),
  /** The padding between the viewport edge and the collision boundary. */
  collisionPadding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    }),
  ]),
  /** If true, prevents the content from being rendered in a portal. */
  portalled: PropTypes.bool,
  /** If true, keeps the content mounted even when hidden. */
  forceMount: PropTypes.bool,
  /** Event handler called when the escape key is pressed. */
  onEscapeKeyDown: PropTypes.func,
  /** Event handler called when pointer down event occurs outside the component. */
  onPointerDownOutside: PropTypes.func,
  /** Event handler called when focus moves outside the component. */
  onFocusOutside: PropTypes.func,
  /** Event handler called when an interaction occurs outside the component. */
  onInteractOutside: PropTypes.func,
  /** Event handler called when focus moves into the component after opening. */
  onOpenAutoFocus: PropTypes.func,
  /** Event handler called when focus moves to the trigger after closing. */
  onCloseAutoFocus: PropTypes.func,
  /** Child components to render inside the MenubarContent. */
  children: PropTypes.node,
};

export default MenubarContent;
