import React from 'react';
import PropTypes from 'prop-types';
import { ToastClose as ToastCloseM } from '../ui/toast';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/toast
 * @uxpindescription Button to close the toast.
 */
const ToastClose = ({ children, className, ...props }) => {
  return (
    <ToastCloseM className={className} {...props}>
      {children}
    </ToastCloseM>
  );
};

ToastClose.propTypes = {
  /** Child components. */
  children: PropTypes.node,

  /** If true, renders the child component instead of the default element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default ToastClose;
