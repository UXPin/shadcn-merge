import React from 'react';
import PropTypes from 'prop-types';
import { DropdownMenuContent as DropdownMenuContentM } from '../ui/dropdown-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/dropdown-menu
 * @uxpindescription The container for the dropdown menu items.
 */
const DropdownMenuContent = ({
  children,
  className,
  align,
  sideOffset,
  ...props
}) => {
  return (
    <DropdownMenuContentM
      className={className}
      align={align}
      sideOffset={sideOffset}
      {...props}
    >
      {children}
    </DropdownMenuContentM>
  );
};

DropdownMenuContent.propTypes = {
  /** Alignment of the menu relative to its trigger. */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /** Offset distance for the alignment. */
  alignOffset: PropTypes.number,
  /** If true, prevents the menu from colliding with viewport edges. */
  avoidCollisions: PropTypes.bool,
  /** Additional CSS classes for styling. */
  className: PropTypes.string,
  /** The collision boundary for the menu. */
  collisionBoundary: PropTypes.oneOfType([
    PropTypes.instanceOf(HTMLElement),
    PropTypes.arrayOf(PropTypes.instanceOf(HTMLElement)),
  ]),
  /** The padding to apply when the menu collides with the boundary. */
  collisionPadding: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** If true, renders the menu content inside a portal. */
  portalled: PropTypes.bool,
  /** The preferred side of the trigger to render against when open. */
  side: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  /** Offset distance for the side positioning. */
  sideOffset: PropTypes.number,
  /** If true, hides the content when detached from the trigger. */
  hideWhenDetached: PropTypes.bool,
  /** If true, keeps the content mounted even when hidden. */
  forceMount: PropTypes.bool,
  /** Event handler for when focus moves into the component after opening. */
  onOpenAutoFocus: PropTypes.func,
  /** Event handler for when focus moves to the trigger after closing. */
  onCloseAutoFocus: PropTypes.func,
  /** Event handler for when the escape key is pressed. */
  onEscapeKeyDown: PropTypes.func,
  /** Event handler for when a pointer down event occurs outside the menu. */
  onPointerDownOutside: PropTypes.func,
  /** Event handler for when focus moves outside the menu. */
  onFocusOutside: PropTypes.func,
  /** Event handler for when an interaction occurs outside the menu. */
  onInteractOutside: PropTypes.func,
  /** If true, sticks the content to the trigger during scrolling. */
  sticky: PropTypes.bool,
  /** Child components to render inside the DropdownMenuContent. */
  children: PropTypes.node,
};

export default DropdownMenuContent;
