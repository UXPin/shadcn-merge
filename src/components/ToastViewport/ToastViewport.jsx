import React from 'react';
import PropTypes from 'prop-types';
import { ToastViewport as ToastViewportM } from '../ui/toast';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/toast
 * @uxpindescription Positioned container for rendering toasts.
 */
const ToastViewport = ({ children, className, ...props }) => {
  return (
    <ToastViewportM className={className} {...props}>
      {children}
    </ToastViewportM>
  );
};

ToastViewport.propTypes = {
  /** If true, renders the child component instead of the default element. */
  asChild: PropTypes.bool,
  /** The keys to use as the keyboard shortcut that will move focus to the toast viewport. */
  hotkey: PropTypes.arrayOf(PropTypes.string),
  /** An author-localized label for the toast viewport to provide context for screen reader users when navigating page landmarks. */
  label: PropTypes.string,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default ToastViewport;
