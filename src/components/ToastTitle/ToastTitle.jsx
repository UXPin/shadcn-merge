import React from 'react';
import PropTypes from 'prop-types';
import { ToastTitle as ToastTitleM } from '../ui/toast';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/toast
 * @uxpindescription Title element of the toast.
 */
const ToastTitle = ({ children, className, ...props }) => {
  return (
    <ToastTitleM className={className} {...props}>
      {children}
    </ToastTitleM>
  );
};

ToastTitle.propTypes = {
  /** Child components. */
  children: PropTypes.node,

  /** If true, renders the child component instead of the default element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Additional className for styling. */
  className: PropTypes.string,
};

export default ToastTitle;
