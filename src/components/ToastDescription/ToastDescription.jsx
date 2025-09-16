import React from 'react';
import PropTypes from 'prop-types';
import { ToastDescription as ToastDescriptionM } from '../ui/toast';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/toast
 * @uxpindescription Description or body text of the toast.
 */
const ToastDescription = ({ children, className, ...props }) => {
  return (
    <ToastDescriptionM className={className} {...props}>
      {children}
    </ToastDescriptionM>
  );
};

ToastDescription.propTypes = {
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

export default ToastDescription;
