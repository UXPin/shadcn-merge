import React from 'react';
import PropTypes from 'prop-types';
import {
  Toast as ToastM,
  ToastProvider,
  ToastAction,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from '../ui/toast';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/toast
 * @uxpindescription The toast element that shows notification content.
 * @uxpinwrappers
 * SkipContainerWrapper
 */
const Toast = ({ children, className, uxpinRef, ...props }) => {
  return (
    <ToastProvider>
      <ToastM className={className} {...props} ref={uxpinRef}>
        {children}
      </ToastM>
      <ToastViewport className='ToastViewport' />
    </ToastProvider>
  );
};

Toast.propTypes = {
  /** Child components. */
  children: PropTypes.node.isRequired,
  /** If true, renders the child component instead of the default element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** The controlled open state of the toast.
   * @uxpinbind onOpenChange 0
   */
  open: PropTypes.bool,
  /** Event handler called when the open state of the toast changes. */
  onOpenChange: PropTypes.func,
  /** The time in milliseconds that the toast should remain visible for. */
  duration: PropTypes.number,
  /** The type of toast, used for styling. */
  type: PropTypes.oneOf(['foreground', 'background']),
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default Toast;
