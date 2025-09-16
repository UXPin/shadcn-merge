import React from 'react';
import PropTypes from 'prop-types';
import { ToastAction as ToastActionM } from '../ui/toast';

/**
 * @uxpindocurl https://ui.shadcn.com/docs/components/toast
 * @uxpindescription Action button shown inside the toast.
 */
const ToastAction = ({ children, className, ...props }) => {
  return (
    <ToastActionM className={className} {...props}>
      {children}
    </ToastActionM>
  );
};

ToastAction.propTypes = {
  /** Child components. */
  children: PropTypes.node,
  /** A short description for an alternate way to carry out the action, for screen reader users who will not be able to navigate to the button easily/quickly. */
  altText: PropTypes.string.isRequired,
  /** If true, renders the child component instead of the default element.
   * @uxpinignoreprop
   */
  asChild: PropTypes.bool,
  /** Additional className for styling.
   * @uxpincontroltype tailwindclassname
   */
  className: PropTypes.string,
};

export default ToastAction;
