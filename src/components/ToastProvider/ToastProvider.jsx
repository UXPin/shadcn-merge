import React from 'react';
import PropTypes from 'prop-types';
import { ToastProvider as ToastProviderM } from '../ui/toast';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/toast
 * @uxpindescription Context provider for toast notifications.
 */
const ToastProvider = ({ children, className, ...props }) => {
  return (
    <ToastProviderM className={className} {...props}>
      {children}
    </ToastProviderM>
  );
};

ToastProvider.propTypes = {
  /** Child components. */
  children: PropTypes.node.isRequired,

  /** Time in milliseconds that each toast should remain visible for. */
  duration: PropTypes.number,
  /** An author-localized label for each toast, used to help screen reader users associate the interruption with a toast. */
  label: PropTypes.string,
  /** Direction of pointer swipe that should close the toast. */
  swipeDirection: PropTypes.oneOf(['right', 'left', 'up', 'down']),
  /** Distance in pixels that the swipe must pass before a close is triggered. */
  swipeThreshold: PropTypes.number,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default ToastProvider;
