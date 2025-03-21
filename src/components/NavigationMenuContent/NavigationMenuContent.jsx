import React from 'react';
import PropTypes from 'prop-types';
import { NavigationMenuContent as NavigationMenuContentM } from '../ui/navigation-menu';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/navigation-menu
 * @uxpindescription Content shown when a trigger is activated.
 */
const NavigationMenuContent = ({ children, className, ...props }) => {
  return (
    <NavigationMenuContentM className={className} {...props}>
      {children}
    </NavigationMenuContentM>
  );
};

NavigationMenuContent.propTypes = {
  /** When true, hover/focus/click interactions will be disabled on elements outside the DismissableLayer. */
  disableOutsidePointerEvents: PropTypes.bool,
  /** Used to force mounting when more control is needed. Useful when controlling animation with animation libraries. */
  forceMount: PropTypes.bool,
  /** Event handler called when the escape key is down. Can be prevented. */
  onEscapeKeyDown: PropTypes.func,
  /** Event handler called when the focus moves outside of the DismissableLayer. Can be prevented. */
  onFocusOutside: PropTypes.func,
  /** Event handler called when an interaction happens outside the DismissableLayer. Specifically, when a pointerdown event happens outside or focus moves outside of it. Can be prevented. */
  onInteractOutside: PropTypes.func,
  /** Event handler called when a pointerdown event happens outside of the DismissableLayer. Can be prevented. */
  onPointerDownOutside: PropTypes.func,
  /** Child components to render inside the NavigationMenuContent. */
  children: PropTypes.node,
};

export default NavigationMenuContent;
